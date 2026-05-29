#!/usr/bin/env python3
"""Docenizer for the Renesas RX instruction set (RXv1, RXv2 and RXv3).

Like the other docenizers (AVR pulls from Microchip's reference manual, 6502
from c64ref, etc.), this extracts from the real datasheets. RX has three
instruction-set-architecture revisions, each with its own Renesas manual:

    RXv1  "RX Family User's Manual: Software"
          R01US0032EJ0120 Rev.1.20            -- 90 instructions
    RXv2  "RX Family RXv2 Instruction Set Architecture User's Manual: Software"
          R01US0071EJ0100 Rev.1.00            -- 109 instructions
    RXv3  "RX Family RXv3 Instruction Set Architecture User's Manual: Software"
          R01US0316EJ0100 Rev.1.00            -- 113 instructions

Each is upward compatible with the previous, so the generated table is the
union: every mnemonic maps to the newest manual that documents it (so the
deep-link lands on a page that actually exists), and a note records which ISA
revision introduced it.

The curated tables below are the authoritative *index*: per instruction they
give the mnemonic, the manual's one-line name, and the detail page (from each
manual's "Quick Page Reference in Alphabetical Order"). For the actual tooltip
body this docenizer then parses that instruction's *detail page* in the PDF and
extracts the Syntax, the Function description prose, and the Flag Change table
(which of C/Z/S/O are affected) -- mirroring how docenizer-avr.py pulls the
"Description" section. It emits ``lib/asm-docs/generated/asm-docs-rx.ts`` with a
``getAsmOpcode`` switch whose ``tooltip`` is the short instruction name and whose
``html`` is the description + syntax + affected flags, with the ``url``
deep-linking to the detail page (``...#page=N``).

Usage:
    ./docenizer-rx.py                   # download the manuals (default) and parse
    ./docenizer-rx.py --pdf-dir DIR     # parse local rxv1.pdf/rxv2.pdf/rxv3.pdf

By default the manuals (latest revisions, see MANUALS) are downloaded from
renesas.com, like docenizer-avr.py; ``--pdf-dir`` is an offline override pointing
at pre-downloaded copies. When parsing yields no detail for an instruction the
generator falls back to the index name so output is always complete.
"""
import argparse
import html as html_lib
import os
import re
import sys
import tempfile
import urllib.request

import pdfminer.high_level

# --- Manual coordinates ------------------------------------------------------

MANUALS = {
    "RXv1": {
        "version": "R01US0032EJ0120 Rev.1.20",
        "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120",
        "pdf": "rxv1.pdf",
    },
    "RXv2": {
        "version": "R01US0071EJ0100 Rev.1.00",
        "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software",
        "pdf": "rxv2.pdf",
    },
    "RXv3": {
        "version": "R01US0316EJ0100 Rev.1.00",
        "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100",
        "pdf": "rxv3.pdf",
    },
}

# --- Verbatim snapshots of each manual's alphabetical instruction list -------
# Rows: (mnemonic, Function, detail-page). Function text and pages are exactly
# as printed in the cited manual. Conditional families (BCnd/BMCnd/SCCnd, and
# for RXv3 the DCMP condition variants) are expanded separately below.

# RXv1: R01US0032EJ0120 Rev.1.20, "List of Instructions ... Alphabetical Order"
RXV1 = [
    ("ABS", "Absolute value", 51),
    ("ADC", "Addition with carry", 52),
    ("ADD", "Addition without carry", 53),
    ("AND", "Logical AND", 55),
    ("BCLR", "Clearing a bit", 57),
    ("BNOT", "Inverting a bit", 61),
    ("BRA", "Unconditional relative branch", 62),
    ("BRK", "Unconditional trap", 63),
    ("BSET", "Setting a bit", 64),
    ("BSR", "Relative subroutine branch", 65),
    ("BTST", "Testing a bit", 66),
    ("CLRPSW", "Clear a flag or bit in the PSW", 67),
    ("CMP", "Comparison", 68),
    ("DIV", "Signed division", 69),
    ("DIVU", "Unsigned division", 71),
    ("EMUL", "Signed multiplication", 73),
    ("EMULU", "Unsigned multiplication", 75),
    ("FADD", "Floating-point addition", 77),
    ("FCMP", "Floating-point comparison", 79),
    ("FDIV", "Floating-point division", 82),
    ("FMUL", "Floating-point multiplication", 84),
    ("FSUB", "Floating-point subtraction", 87),
    ("FTOI", "Floating point to integer conversion", 90),
    ("INT", "Software interrupt", 93),
    ("ITOF", "Integer to floating-point conversion", 94),
    ("JMP", "Unconditional jump", 96),
    ("JSR", "Jump to a subroutine", 97),
    ("MACHI", "Multiply-Accumulate the high-order word", 98),
    ("MACLO", "Multiply-Accumulate the low-order word", 99),
    ("MAX", "Selecting the highest value", 100),
    ("MIN", "Selecting the lowest value", 101),
    ("MOV", "Transferring data", 102),
    ("MOVU", "Transfer unsigned data", 105),
    ("MUL", "Multiplication", 107),
    ("MULHI", "Multiply the high-order word", 109),
    ("MULLO", "Multiply the low-order word", 110),
    ("MVFACHI", "Move the high-order longword from accumulator", 111),
    ("MVFACMI", "Move the middle-order longword from accumulator", 112),
    ("MVFC", "Transfer from a control register", 113),
    ("MVTACHI", "Move the high-order longword to accumulator", 114),
    ("MVTACLO", "Move the low-order longword to accumulator", 115),
    ("MVTC", "Transfer to a control register", 116),
    ("MVTIPL", "Interrupt priority level setting (privileged instruction)", 117),
    ("NEG", "Two's complementation", 118),
    ("NOP", "No operation", 119),
    ("NOT", "Logical complementation", 120),
    ("OR", "Logical OR", 121),
    ("POP", "Restoring data from stack to register", 123),
    ("POPC", "Restoring a control register", 124),
    ("POPM", "Restoring multiple registers from the stack", 125),
    ("PUSH", "Saving data on the stack", 126),
    ("PUSHC", "Saving a control register", 127),
    ("PUSHM", "Saving multiple registers", 128),
    ("RACW", "Round the accumulator word", 129),
    ("REVL", "Endian conversion (longword)", 131),
    ("REVW", "Endian conversion (word)", 132),
    ("RMPA", "Multiply-and-accumulate operation", 133),
    ("ROLC", "Rotation with carry to left", 135),
    ("RORC", "Rotation with carry to right", 136),
    ("ROTL", "Rotation to left", 137),
    ("ROTR", "Rotation to right", 138),
    ("ROUND", "Conversion from floating-point to integer", 139),
    ("RTE", "Return from the exception (privileged instruction)", 142),
    ("RTFI", "Return from the fast interrupt (privileged instruction)", 143),
    ("RTS", "Returning from a subroutine", 144),
    ("RTSD", "Releasing stack frame and returning from subroutine", 145),
    ("SAT", "Saturation of signed 32-bit data", 147),
    ("SATR", "Saturation of signed 64-bit data for RMPA", 148),
    ("SBB", "Subtraction with borrow", 149),
    ("SCMPU", "String comparison", 152),
    ("SETPSW", "Setting a flag or bit in the PSW", 153),
    ("SHAR", "Arithmetic shift to the right", 154),
    ("SHLL", "Logical and arithmetic shift to the left", 155),
    ("SHLR", "Logical shift to the right", 156),
    ("SMOVB", "Transferring a string backward", 157),
    ("SMOVF", "Transferring a string forward", 158),
    ("SMOVU", "Transferring a string", 159),
    ("SSTR", "Storing a string", 160),
    ("STNZ", "Transfer with condition (on not zero)", 161),
    ("STZ", "Transfer with condition (on zero)", 162),
    ("SUB", "Subtraction without borrow", 163),
    ("SUNTIL", "Searching for a string (until match)", 164),
    ("SWHILE", "Searching for a string (while match)", 166),
    ("TST", "Logical test", 168),
    ("WAIT", "Waiting (privileged instruction)", 169),
    ("XCHG", "Exchanging values", 170),
    ("XOR", "Logical exclusive or", 172),
]

# RXv2: R01US0071EJ0100 Rev.1.00, "Quick Page Reference in Alphabetical Order".
# Only the rows that are new in RXv2 or whose detail wording/extent changed are
# listed here; shared mnemonics inherit RXv1 unless overridden. These are the
# RXv2-new instructions (DSP/FPU extensions) with their RXv2 detail pages.
RXV2_NEW = [
    ("EMACA", "Extended multiply-accumulate to the accumulator", 80),
    ("EMSBA", "Extended multiply-subtract to the accumulator", 81),
    ("EMULA", "Extended multiply to the accumulator", 84),
    ("FSQRT", "Floating-point square root", 98),
    ("FTOU", "Floating point to unsigned integer conversion", 106),
    ("MOVCO", "Storing with LI flag clear", 122),
    ("MOVLI", "Loading with LI flag set", 123),
    ("MSBHI", "Multiply-Subtract the higher-order word", 126),
    ("MSBLH", "Multiply-Subtract the lower-order word and higher-order word", 127),
    ("MSBLO", "Multiply-Subtract the lower-order word", 128),
    ("MULLH", "Multiply the lower-order word and higher-order word", 132),
    ("MVFACGU", "Move the guard longword from the accumulator", 134),
    ("MVFACLO", "Move the lower-order longword from the accumulator", 136),
    ("MVTACGU", "Move the guard longword to the accumulator", 139),
    ("RACL", "Round the accumulator longword", 155),
    ("RDACL", "Round the accumulator longword", 159),
    ("RDACW", "Round the accumulator word", 161),
    ("UTOF", "Unsigned integer to floating-point conversion", 201),
]

# RXv3: R01US0316EJ0100 Rev.1.00, "Quick Page Reference in Alphabetical Order"
# (pages 10-15). RXv3 adds: two bit-field transfer instructions (BFMOV/BFMOVZ),
# the register-bank save/restore pair (SAVE/RSTR), and the 21-instruction
# double-precision floating-point coprocessor set. Mnemonics, Function text and
# detail pages are transcribed verbatim from the manual. (The DCMP condition
# variants -- DCMPUN/EQ/LT/LE -- are expanded via CONDITIONAL_FAMILIES below.)
RXV3_NEW = [
    ("BFMOV", "Transferring bit-fields", 81),
    ("BFMOVZ", "Transferring a bit-field and setting the other bits at the destination to zero", 82),
    ("DABS", "Double-precision floating-point absolute value", 228),
    ("DADD", "Double-precision floating-point addition without carry", 229),
    ("DDIV", "Double-precision floating-point division", 234),
    ("DMOV", "Double-precision floating-point transferring data", 236),
    ("DMUL", "Double-precision floating-point multiplication", 238),
    ("DNEG", "Double-precision floating-point negate", 240),
    ("DPOPM", "Restoring multiple double-precision floating-point registers", 241),
    ("DPUSHM", "Saving multiple double-precision floating-point registers", 243),
    ("DROUND", "Conversion from double-precision floating-point number to signed integer", 245),
    ("DSQRT", "Double-precision floating-point square root", 248),
    ("DSUB", "Double-precision floating-point subtraction", 250),
    ("DTOF", "Double-precision floating-point number to single-precision floating-point number conversion", 252),
    ("DTOI", "Double-precision floating-point number to signed integer conversion", 255),
    ("DTOU", "Double-precision floating-point number to unsigned integer conversion", 257),
    ("FTOD", "Single-precision floating-point number to double-precision floating-point number conversion", 259),
    ("ITOD", "Signed integer to double-precision floating-point number conversion", 261),
    ("MVFDC", "Transfer from double-precision floating-point control register", 262),
    ("MVFDR", "Transfer from double-precision floating-point comparison result register", 263),
    ("MVTDC", "Transfer to double-precision floating-point control register", 264),
    ("RSTR", "Collective restoration of register values (privileged instruction)", 225),
    ("SAVE", "Collective saving of register values (privileged instruction)", 226),
    ("UTOD", "Unsigned integer to double-precision floating-point number conversion", 265),
]

# Conditional-instruction families share one detail page per manual. The
# branch/bit-transfer/set families exist in all three revisions; DCMP is RXv3.
# Pages are RXv2 detail pages for the v1/v2 families (consistent with how those
# resolve to the newest manual), and the RXv3 page for DCMP.
CONDITIONAL_FAMILIES = {
    "branch": (
        ["BEQ", "BZ", "BNE", "BNZ", "BGEU", "BC", "BLTU", "BNC",
         "BGTU", "BLEU", "BPZ", "BN", "BGE", "BLE", "BGT", "BLT",
         "BO", "BNO"],
        "Relative conditional branch", "RXv1", 58,
    ),
    "bittransfer": (
        ["BMEQ", "BMZ", "BMNE", "BMNZ", "BMGEU", "BMC", "BMLTU", "BMNC",
         "BMGTU", "BMLEU", "BMPZ", "BMN", "BMGE", "BMLE", "BMGT", "BMLT",
         "BMO", "BMNO"],
        "Conditional bit transfer", "RXv1", 59,
    ),
    "dcmp": (
        ["DCMPUN", "DCMPEQ", "DCMPLT", "DCMPLE"],
        "Double-precision floating-point comparison", "RXv3", 231,
    ),
    "setcond": (
        ["SCEQ", "SCZ", "SCNE", "SCNZ", "SCGEU", "SCC", "SCLTU", "SCNC",
         "SCGTU", "SCLEU", "SCPZ", "SCN", "SCGE", "SCLE", "SCGT", "SCLT",
         "SCO", "SCNO"],
        "Condition setting", "RXv1", 150,
    ),
}


# --- PDF loading -------------------------------------------------------------

def _pdf_text(path):
    """Return the full text of a PDF (pages separated by form feeds)."""
    return pdfminer.high_level.extract_text(path)


def load_manual_pages(isa, pdf_dir):
    """Return {printed_page_number: page_text} for one manual.

    The manual's printed footer ("Page N of M") matches both the index page
    numbers in the tables above and the PDF viewer's #page anchor, so we key the
    pages on it. Reads from ``pdf_dir`` if given, otherwise downloads.
    """
    manual = MANUALS[isa]
    if pdf_dir:
        path = os.path.join(pdf_dir, manual["pdf"])
        if not os.path.exists(path):
            raise SystemExit(f"Missing {path} (expected {manual['pdf']} for {isa})")
        text = _pdf_text(path)
    else:
        print(f"Downloading {isa} ({manual['version']}) ...", file=sys.stderr)
        req = urllib.request.Request(manual["url"], headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = resp.read()
        with tempfile.NamedTemporaryFile(suffix=".pdf") as f:
            f.write(data)
            f.flush()
            text = _pdf_text(f.name)
    pages = {}
    for page in text.split("\x0c"):
        m = re.search(r"Page (\d+) of \d+", page)
        if m:
            pages.setdefault(int(m.group(1)), page)
    return pages


# --- Detail-page parsing -----------------------------------------------------

FLAG_NAMES = {"C", "Z", "S", "O",
              "DCV", "DCO", "DCZ", "DCU", "DCX", "DCE",
              "DFV", "DFO", "DFZ", "DFU", "DFX"}
# "Changed" marks: U+221A check (RXv1/v2), U+F050 private-use check (RXv3
# DFPU pages), and "*" (conditional change, e.g. CLRPSW/MVTC). "Unchanged" is
# the minus/hyphen/en-dash.
CHANGED_MARKS = {"\u221a", "\uf050", "*"}  # check, RXv3 DFPU check, conditional
UNCHANGED_MARKS = {"\u2212", "-", "\u2013"}  # minus, hyphen, en-dash
MARKS = CHANGED_MARKS | UNCHANGED_MARKS
# Page furniture that pdfminer interleaves into the section text (incl. a bare
# mnemonic/figure-label line such as "BFMOV" or "MSB").
_NOISE = re.compile(
    r"^(Section\s+\d+|Instruction Code|Page:\s*\d+|RX Family|R01US\d|.*Rev\.\d+$|"
    r"Page \d+ of \d+|[A-Za-z/\- ]*\binstruction$|[A-Z][A-Z0-9]{1,9}$)"
)
# A real Syntax line starts with a mnemonic: 2+ caps, optionally a short
# lowercase tail (BCnd, DCMPcm, SCCnd) and a .size suffix. This rejects the
# Title-case English "name"/expansion lines that also sit under Syntax.
_SYNLINE = re.compile(r"^(\(\d+\)\s*)?[A-Z]{2,}[a-z]{0,2}(\.[A-Za-z]+)?[ (\t]")
# Tokens that mark the start of an operand/encoding table (not prose).
_TABLE_TOK = re.compile(r"\b(b\d{1,2}|Operand|Processing|Code Size|memex|UIMM|SIMM|dsp:|Rs2?|Rd|Adest)\b")


def _ascii(text):
    """Normalize a few unicode symbols and drop any remaining non-ASCII."""
    text = (text.replace("–", "-").replace("—", "-").replace("−", "-")
                .replace("×", "x").replace("√", "").replace("•", " ")
                .replace("·", " ").replace("≤", "<=").replace("≥", ">=")
                .replace("≠", "!=").replace("∞", "infinity"))
    return text.encode("ascii", "ignore").decode("ascii")


def _clean(lines):
    out = []
    for line in lines:
        s = re.sub(r"\s{2,}", " ", line.strip())
        if s and not _NOISE.match(s):
            out.append(s)
    return out


def _section_index(lines, name):
    for i, line in enumerate(lines):
        if line.strip() == name:
            return i
    return -1


def _prose_sentences(text):
    """Split prose into clean sentences, dropping figure/table fragments."""
    text = _ascii(text)
    text = re.sub(r"\s+", " ", text).strip()
    kept = []
    for sentence in re.split(r"(?<=[.:])\s+", text):
        words = sentence.split()
        # Several Title-Case words mid-sentence signal a flattened operand table
        # (e.g. MOV's "Register ... Memory location ... Immediate value ...")
        # rather than prose, where mid-sentence capitals are normally all-caps
        # register names (PSW, FPSW, ...) which we don't count here.
        titlecase = sum(1 for w in words[1:] if re.match(r"^[A-Z][a-z]{2,}$", w))
        table_run = titlecase >= 3
        ok = (3 <= len(words) <= 60 and re.search(r"[a-z]", sentence)
              and not _TABLE_TOK.search(sentence) and re.search(r"[.:]$", sentence)
              and not table_run)
        if ok:
            kept.append(sentence)
        elif kept:
            break
        if len(" ".join(kept)) > 600:
            break
    return kept[:6]


def extract_detail(page_text):
    """Parse a detail page into (syntax_forms, sentences, flags, n_bullets).

    ``syntax_forms`` is the list of syntax lines (each operand form on its own).
    ``sentences`` is the Function description split into clean sentences.
    ``n_bullets`` is the count of bullet markers in the Function section (the
    Renesas manuals bullet the trailing notes; pdfminer detaches the markers but
    the count is reliable, so the last ``n_bullets`` sentences are the notes).
    ``flags`` is "none", a comma-separated subset of C/Z/S/O (or the DFPU flags),
    or "" when the flag table could not be parsed confidently.
    """
    lines = [line.strip() for line in page_text.splitlines()]
    i_syn = _section_index(lines, "Syntax")
    i_op = _section_index(lines, "Operation")
    i_fn = _section_index(lines, "Function")
    i_flag = _section_index(lines, "Flag Change")
    i_fmt = _section_index(lines, "Instruction Format")

    syntax_forms = []
    if 0 <= i_syn < i_op:
        syntax_forms = [_ascii(s) for s in _clean(lines[i_syn + 1:i_op]) if _SYNLINE.match(s)]

    sentences, n_bullets = [], 0
    if i_fn >= 0:
        ends = [x for x in (i_flag, i_fmt, len(lines)) if x > i_fn]
        fn_lines = lines[i_fn + 1:min(ends)]
        n_bullets = sum(stripped.count("•") + stripped.count("·")
                        for stripped in fn_lines)
        block = " ".join(_clean(fn_lines))
        anchor = re.search(r"((?:\(\d+\)\s*)?(?:This instruction|These instructions|This is)\b.*)", block)
        sentences = _prose_sentences(anchor.group(1) if anchor else block)

    flags = ""
    if i_flag >= 0:
        block = lines[i_flag + 1:(i_fmt if i_fmt > i_flag else len(lines))]
        if "does not affect" in " ".join(block):
            flags = "none"
        else:
            names = [x for x in block if x in FLAG_NAMES]
            marks = [x for x in block if x in MARKS]
            # The grid prints all flag names (a column header row) then all
            # marks (the row below) in the same column order, so an equal-length
            # positional pairing is correct; a mismatch means the layout was
            # interleaved unexpectedly, so we leave flags unknown rather than guess.
            if names and len(marks) == len(names):
                changed = [names[i] for i in range(len(names)) if marks[i] in CHANGED_MARKS]
                flags = ", ".join(changed) if changed else "none"
    return syntax_forms, sentences, flags, n_bullets


# --- Table assembly + generation ---------------------------------------------

def build_index():
    """Union of the three ISA revisions: mnemonic -> (name, isa, page).

    Newer manuals win for shared mnemonics so the deep-link page exists in the
    referenced manual; the ISA tag still reflects where it was introduced.
    """
    index = {}
    for mnem, name, page in RXV1:
        index[mnem] = (name, "RXv1", page)
    for mnem, name, page in RXV2_NEW:
        index[mnem] = (name, "RXv2", page)
    for mnem, name, page in RXV3_NEW:
        index[mnem] = (name, "RXv3", page)
    for _family, (mnemonics, name, isa, page) in CONDITIONAL_FAMILIES.items():
        for mnem in mnemonics:
            index.setdefault(mnem, (f"{name} ({mnem})", isa, page))
    return index


def esc_html(text):
    """HTML-escape content (the generated value is embedded as HTML)."""
    return html_lib.escape(text, quote=False)


def esc_ts(text):
    """Escape for a double-quoted TypeScript string literal."""
    return text.replace("\\", "\\\\").replace('"', '\\"')


def _ul(items):
    return "<ul>" + "".join(f"<li>{esc_html(i)}</li>" for i in items) + "</ul>"


def build_function_html(name, sentences, n_bullets):
    """Render the Function description, preserving the manual's list structure.

    Numbered forms ("(1) ...", "(2) ...") become list items; otherwise the lead
    sentence is a paragraph and the trailing ``n_bullets`` notes become a list
    (matching how the power/llvm docenizers render <ul>/<li>).
    """
    if not sentences:
        return f"<p>{esc_html(name)}.</p>"
    numbered = [s for s in sentences if re.match(r"^\(\d+\)", s)]
    if len(numbered) >= 2:
        return _ul(sentences)
    n = min(n_bullets, len(sentences) - 1)
    lead = " ".join(sentences[:len(sentences) - n]) if n else " ".join(sentences)
    html = f"<p>{esc_html(lead)}</p>"
    if n:
        html += _ul(sentences[len(sentences) - n:])
    return html


def build_syntax_html(forms):
    """Render each syntax/operand form on its own line."""
    if not forms:
        return ""
    lines = "<br>".join(f"<code>{esc_html(f)}</code>" for f in forms)
    return f"<p><b>Syntax:</b><br>{lines}</p>"


def build_html(name, isa, syntax_forms, sentences, flags, n_bullets):
    parts = [build_function_html(name, sentences, n_bullets)]
    syntax_html = build_syntax_html(syntax_forms)
    if syntax_html:
        parts.append(syntax_html)
    if flags == "none":
        parts.append("<p><b>Flags affected:</b> none</p>")
    elif flags:
        parts.append(f"<p><b>Flags affected:</b> {esc_html(flags)}</p>")
    parts.append(f"<p><i>RX instruction (introduced in {isa}).</i></p>")
    return "".join(parts)


def generate(index, details, out_path):
    cases = []
    missing = []
    for mnem in sorted(index):
        name, isa, page = index[mnem]
        syntax_forms, sentences, flags, n_bullets = details.get(mnem, ([], [], "", 0))
        if not sentences:
            missing.append(mnem)
        url = MANUALS[isa]["url"] + (f"#page={page}" if page else "")
        html = build_html(name, isa, syntax_forms, sentences, flags, n_bullets)
        tooltip = f"{name} [{isa}]"
        cases.append(
            f'        case "{mnem}":\n'
            f"            return {{\n"
            f'                "html": "{esc_ts(html)}",\n'
            f'                "tooltip": "{esc_ts(tooltip)}",\n'
            f'                "url": "{esc_ts(url)}",\n'
            f"            }};\n"
        )
    versions = ", ".join(f"{k} {v['version']}" for k, v in MANUALS.items())
    header = (
        f"// Generated from the Renesas RX instruction-set manuals\n"
        f"// ({versions}) by docenizer-rx.py. Do not edit by hand.\n"
        "import type {AssemblyInstructionInfo} from "
        "'../../../types/assembly-docs.interfaces.js';\n\n"
        "export function getAsmOpcode(opcode: string | undefined): "
        "AssemblyInstructionInfo | undefined {\n"
        "    if (!opcode) return;\n"
        "    switch (opcode.toUpperCase()) {\n"
    )
    footer = "    }\n}\n"
    with open(out_path, "w") as f:
        f.write(header)
        f.write("\n".join(cases))
        f.write(footer)
    print(f"Wrote {len(cases)} RX opcodes (RXv1+RXv2+RXv3) to {out_path}")
    if missing:
        print(f"  note: {len(missing)} opcodes have no parsed Function "
              f"(fell back to the index name): {', '.join(missing)}", file=sys.stderr)


def collect_details(index, pdf_dir):
    """Parse each instruction's detail page for syntax/function/flags."""
    # Group the (isa, page) lookups so each manual is loaded once.
    by_isa = {}
    for mnem, (_name, isa, page) in index.items():
        by_isa.setdefault(isa, set()).add(page)
    details = {}
    for isa, pages_needed in by_isa.items():
        manual_pages = load_manual_pages(isa, pdf_dir)
        page_detail = {}
        for page in pages_needed:
            text = manual_pages.get(page, "")
            page_detail[page] = extract_detail(text) if text else ([], [], "", 0)
        for mnem, (_name, m_isa, page) in index.items():
            if m_isa == isa:
                details[mnem] = page_detail[page]
    return details


def main():
    parser = argparse.ArgumentParser(
        description="Docenize the Renesas RX instruction set (RXv1/RXv2/RXv3) by "
        "parsing the Syntax/Function/Flag-Change detail pages of the three manuals."
    )
    parser.add_argument(
        "-o", "--outputpath",
        default="../../../lib/asm-docs/generated/asm-docs-rx.ts",
        help="Destination .ts path (default: the in-tree generated file)",
    )
    parser.add_argument(
        "--pdf-dir",
        help="Offline override: directory with pre-downloaded "
        "rxv1.pdf/rxv2.pdf/rxv3.pdf. If omitted, the manuals are downloaded "
        "from renesas.com.",
    )
    args = parser.parse_args()

    index = build_index()
    details = collect_details(index, args.pdf_dir)
    generate(index, details, args.outputpath)


if __name__ == "__main__":
    main()
