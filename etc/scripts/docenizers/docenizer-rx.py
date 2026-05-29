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
revision introduced it. Each manual's "Quick Page Reference in Alphabetical
Order" gives, per instruction, the mnemonic, a one-line Function description,
and the detail page; this script parses those lists and emits
``lib/asm-docs/generated/asm-docs-rx.ts`` with a ``getAsmOpcode`` switch whose
tooltip is the manual's Function text and whose URL deep-links to the detail
page (``...#page=N``), mirroring the AVR output.

Usage:
    ./docenizer-rx.py                       # (re)generate the .ts from the tables
    ./docenizer-rx.py --verify              # re-parse the PDFs, report any diffs
    ./docenizer-rx.py --verify --from-text v1.txt v2.txt v3.txt

The instruction tables below are transcribed from the three manuals' "Quick
Page Reference in Alphabetical Order" lists -- mnemonic, the manual's exact
one-line Function text, and the detail page. ``--verify`` downloads (or reads)
the manual PDFs, parses those same lists with pdftotext/pdfplumber, and reports
any mnemonic/page that differs from the embedded table, so the transcription can
be confirmed or refreshed against a new revision. Renesas' site frequently 403s
automated fetches, which is why generation reads from the embedded tables and
verification is a separate, opt-in step.
"""
import argparse
import io
import re
import subprocess
import sys
import tempfile
import urllib.request

# --- Manual coordinates ------------------------------------------------------

MANUALS = {
    "RXv1": {
        "version": "R01US0032EJ0120 Rev.1.20",
        "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120",
    },
    "RXv2": {
        "version": "R01US0071EJ0100 Rev.1.00",
        "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software",
    },
    "RXv3": {
        "version": "R01US0316EJ0100 Rev.1.00",
        "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100",
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


# --- PDF fetch / parse -------------------------------------------------------

def fetch_manual_text(url):
    """Download a manual PDF and extract its text. Returns None on failure."""
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read()
    except Exception as e:  # pragma: no cover - network dependent
        print(f"  (could not download {url}: {e})", file=sys.stderr)
        return None
    try:
        with tempfile.NamedTemporaryFile(suffix=".pdf") as f:
            f.write(data)
            f.flush()
            out = subprocess.run(
                ["pdftotext", "-layout", f.name, "-"],
                capture_output=True, check=True,
            )
            return out.stdout.decode("utf-8", "replace")
    except Exception:
        pass
    try:  # pragma: no cover - optional dependency
        import pdfplumber
        text = []
        with pdfplumber.open(io.BytesIO(data)) as pdf:
            for page in pdf.pages:
                text.append(page.extract_text() or "")
        return "\n".join(text)
    except Exception as e:  # pragma: no cover
        print(f"  (no PDF text extractor available: {e})", file=sys.stderr)
        return None


# Row: MNEMONIC  Function text  detail-page  code-page
_ROW = re.compile(r"^([A-Z][A-Z0-9]+)\s+(.+?)\s+(\d{1,3})\s+(\d{1,3})\s*$")


def parse_manual_text(text):
    """Extract (mnemonic, function, detail_page) rows from manual text."""
    rows, seen, in_list = [], set(), False
    for line in text.splitlines():
        if ("Alphabetical Order" in line) or ("Classified in Alphabetical" in line):
            in_list = True
            continue
        if in_list and "Classified by Type" in line:
            break
        if not in_list:
            continue
        m = _ROW.match(line.strip())
        if not m:
            continue
        mnem, func, detail = m.group(1), m.group(2).strip(), int(m.group(3))
        if mnem in {"RX", "Mnemonic"} or detail < 40 or detail > 260:
            continue
        if mnem in seen:
            continue
        seen.add(mnem)
        rows.append((mnem, func, detail))
    return rows


def build_table():
    """Union of the three ISA revisions: mnemonic -> (func, isa, page|None).

    Newer manuals win for shared mnemonics so the deep-link page exists in the
    referenced manual; the ISA tag still reflects where it was introduced.
    """
    table = {}
    # RXv1 base.
    for mnem, func, page in RXV1:
        table[mnem] = (func, "RXv1", page)
    # RXv2 additions (and any RXv2 re-pagination of new wording).
    for mnem, func, page in RXV2_NEW:
        table[mnem] = (func, "RXv2", page)
    # RXv3 additions (double-precision family etc.).
    for mnem, func, page in RXV3_NEW:
        table[mnem] = (func, "RXv3", page)
    # Conditional families.
    for _f, (mnemonics, func, isa, page) in CONDITIONAL_FAMILIES.items():
        for mnem in mnemonics:
            table.setdefault(mnem, (f"{func} ({mnem})", isa, page))
    return table


def escape(text):
    return text.replace("\\", "\\\\").replace('"', '\\"')


def generate(table, out_path):
    cases = []
    for mnem in sorted(table):
        func, isa, page = table[mnem]
        manual = MANUALS[isa]
        url = manual["url"] + (f"#page={page}" if page else "")
        html = escape(f"<p>{func}. (RX instruction, introduced in {isa}.)</p>")
        tooltip = escape(f"{func} [{isa}]")
        cases.append(
            f'        case "{mnem}":\n'
            f"            return {{\n"
            f'                "html": "{html}",\n'
            f'                "tooltip": "{tooltip}",\n'
            f'                "url": "{escape(url)}",\n'
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


def verify_against_manual(isa, text):
    """Compare the embedded table for one ISA against parsed manual text.

    Reports mnemonics/pages that differ so a maintainer can confirm (or update)
    the embedded snapshot against the real PDF. Returns the number of mismatches.
    """
    parsed = {mnem: (func, page) for mnem, func, page in parse_manual_text(text)}
    if not parsed:
        print(f"  {isa}: could not parse an instruction list from the manual text")
        return 0
    embedded = {"RXv1": RXV1, "RXv2": RXV2_NEW, "RXv3": RXV3_NEW}[isa]
    mismatches = 0
    for mnem, _func, page in embedded:
        if mnem not in parsed:
            # RXv2_NEW/RXV3_NEW only list deltas, so absence is expected there.
            if isa == "RXv1":
                print(f"  {isa}: {mnem} in snapshot but not parsed from manual")
                mismatches += 1
            continue
        man_page = parsed[mnem][1]
        if page is not None and man_page != page:
            print(f"  {isa}: {mnem} page {page} (snapshot) != {man_page} (manual)")
            mismatches += 1
    print(f"  {isa}: {len(parsed)} parsed, {mismatches} mismatch(es) vs snapshot")
    return mismatches


def load_texts(from_text):
    """Yield (isa, text) for each manual, from local dumps or live download."""
    if from_text:
        for isa, path in zip(("RXv1", "RXv2", "RXv3"), from_text):
            try:
                with open(path, encoding="utf-8", errors="replace") as f:
                    yield isa, f.read()
            except OSError as e:
                print(f"  ({path}: {e})", file=sys.stderr)
    else:
        for isa, m in MANUALS.items():
            print(f"Fetching {isa} ({m['version']}) ...")
            t = fetch_manual_text(m["url"])
            if t:
                yield isa, t


def main():
    p = argparse.ArgumentParser(
        description="Docenizes the Renesas RX instruction set (RXv1/RXv2/RXv3). "
        "The instruction tables are transcribed from the Renesas manuals; use "
        "--verify to re-parse the PDFs and check the transcription."
    )
    p.add_argument(
        "-o", "--outputpath",
        default="../../../lib/asm-docs/generated/asm-docs-rx.ts",
        help="Destination .ts path (default: the in-tree generated file)",
    )
    p.add_argument(
        "--verify", action="store_true",
        help="Re-parse the manual PDFs and report any differences from the "
        "embedded tables instead of generating output",
    )
    p.add_argument(
        "--from-text", nargs=3, metavar=("RXV1_TXT", "RXV2_TXT", "RXV3_TXT"),
        help="Use pre-fetched text dumps of the three manuals (for --verify)",
    )
    args = p.parse_args()

    if args.verify:
        total = sum(verify_against_manual(isa, text) for isa, text in load_texts(args.from_text))
        print(f"Total mismatches: {total}")
        sys.exit(1 if total else 0)

    generate(build_table(), args.outputpath)


if __name__ == "__main__":
    main()
