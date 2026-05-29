// Generated from the Renesas RX instruction-set manuals
// (RXv1 R01US0032EJ0120 Rev.1.20, RXv2 R01US0071EJ0100 Rev.1.00, RXv3 R01US0316EJ0100 Rev.1.00) by docenizer-rx.py. Do not edit by hand.
import type {AssemblyInstructionInfo} from '../../../types/assembly-docs.interfaces.js';

export function getAsmOpcode(opcode: string | undefined): AssemblyInstructionInfo | undefined {
    if (!opcode) return;
    switch (opcode.toUpperCase()) {
        case "ABS":
            return {
                "html": "<p>(1) This instruction takes the absolute value of dest and places the result in dest. (2) This instruction takes the absolute value of src and places the result in dest.</p><p><b>Syntax:</b> <code>(1) ABS dest ; (2) ABS src, dest</code></p><p><b>Flags affected:</b> Z, S, O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Absolute value [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=51",
            };

        case "ADC":
            return {
                "html": "<p>This instruction adds dest, src, and the C flag and places the result in dest.</p><p><b>Syntax:</b> <code>ADC src, dest</code></p><p><b>Flags affected:</b> C, Z, S, O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Addition with carry [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=52",
            };

        case "ADD":
            return {
                "html": "<p>(1) This instruction adds dest and src and places the result in dest. (2) This instruction adds src and src2 and places the result in dest.</p><p><b>Syntax:</b> <code>(1) ADD src, dest ; (2) ADD src, src2, dest</code></p><p><b>Flags affected:</b> C, Z, S, O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Addition without carry [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=53",
            };

        case "AND":
            return {
                "html": "<p>(1) This instruction logically ANDs dest and src and places the result in dest. (2) This instruction logically ANDs src and src2 and places the result in dest.</p><p><b>Syntax:</b> <code>(1) AND src, dest ; (2) AND src, src2, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Logical AND [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=55",
            };

        case "BC":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BCLR":
            return {
                "html": "<p>This instruction clears the bit of dest, which is specified by src. The immediate value given as src is the number (position) of the bit. The range for IMM:3 operands is 0 IMM:3 7.</p><p><b>Syntax:</b> <code>BCLR src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Clearing a bit [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=57",
            };

        case "BEQ":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BEQ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BFMOV":
            return {
                "html": "<p>BFMOV The number of bits specified by width from the bit position slsb at the location src are transferred to the number of bits specified by width from the bit position dlsb at the location dest. The values of the rest of the bits at dest are retained. The range of slsb is 0 slsb 31, the range of dlsb is 0 dlsb 31, and the range of width is 1 width 31.</p><p><b>Syntax:</b> <code>BFMOV slsb, dlsb, width, src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Transferring bit-fields [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=81",
            };

        case "BFMOVZ":
            return {
                "html": "<p>The number of bits specified by width from the bit position slsb at the location src are transferred to the number of bits specified by width from the bit position dlsb at the location dest. The rest of the bits at dest become 0. The range of slsb is 0 slsb 31, the range of dlsb is 0 dlsb 31, and the range of width is 1 width 31.</p><p><b>Syntax:</b> <code>BFMOVZ slsb, dlsb, width, src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Transferring a bit-field and setting the other bits at the destination to zero [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=82",
            };

        case "BGE":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BGE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BGEU":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BGEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BGT":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BGT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BGTU":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BGTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BLE":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BLE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BLEU":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BLEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BLT":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BLT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BLTU":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BLTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BMC":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMEQ":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMEQ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMGE":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMGE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMGEU":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMGEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMGT":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMGT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMGTU":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMGTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMLE":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMLE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMLEU":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMLEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMLT":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMLT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMLTU":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMLTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMN":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMN) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMNC":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMNC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMNE":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMNE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMNO":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMNO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMNZ":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMNZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMO":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMPZ":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMPZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMZ":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to the bit of dest, which is specified by src; that is, 1 or 0 is transferred to the bit if the condition is true or false, respectively. The following table lists the types of BMCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conditional bit transfer (BMZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BN":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BN) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BNC":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BNC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BNE":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BNE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BNO":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BNO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BNOT":
            return {
                "html": "<p>This instruction inverts the value of the bit of dest, which is specified by src, and places the result into the specified bit. The immediate value given as src is the number (position) of the bit. The range for IMM:3 operands is 0 IMM:3 7.</p><p><b>Syntax:</b> <code>BNOT src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Inverting a bit [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=61",
            };

        case "BNZ":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BNZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BO":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BPZ":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BPZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BRA":
            return {
                "html": "<p>This instruction executes a relative branch to destination address specified by src.</p><p><b>Syntax:</b> <code>BRA(.length) src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Unconditional relative branch [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=62",
            };

        case "BRK":
            return {
                "html": "<p>This instruction generates an unconditional trap of number 0. This instruction causes a transition to supervisor mode and clears the PM bit in the PSW. This instruction clears the U and I bits in the PSW.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Unconditional trap [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=63",
            };

        case "BSET":
            return {
                "html": "<p>This instruction sets the bit of dest, which is specified by src. The immediate value given as src is the number (position) of the bit. The range for IMM:3 operands is 0 IMM:3 7.</p><p><b>Syntax:</b> <code>BSET src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Setting a bit [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=64",
            };

        case "BSR":
            return {
                "html": "<p>This instruction executes a relative branch to destination address specified by src.</p><p><b>Syntax:</b> <code>BSR(.length) src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative subroutine branch [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=65",
            };

        case "BTST":
            return {
                "html": "<p>This instruction moves the inverse of the value of the bit of scr2, which is specified by src, to the Z flag and the value of the bit of scr2, which is specified by src, to the C flag. The immediate value given as src is the number (position) of the bit. The range for IMM:3 operands is 0 IMM:3 7.</p><p><b>Syntax:</b> <code>BTST src, src2</code></p><p><b>Flags affected:</b> C, Z</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Testing a bit [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=66",
            };

        case "BZ":
            return {
                "html": "<p>This instruction makes the flow of relative branch to the location indicated by src when the condition specified by Cnd is true; if the condition is false, branching does not proceed. The following table lists the types of BCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Relative conditional branch (BZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "CLRPSW":
            return {
                "html": "<p>This instruction clears the O, S, Z, or C flag, which is specified by dest, or the U or I bit. In user mode, writing to the U or I bit is ignored. In supervisor mode, all flags and bits can be written to.</p><p><b>Syntax:</b> <code>CLRPSW dest</code></p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Clear a flag or bit in the PSW [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=67",
            };

        case "CMP":
            return {
                "html": "<p>This instruction changes the states of flags in the PSW to reflect the result of subtracting src from src2.</p><p><b>Syntax:</b> <code>CMP src, src2</code></p><p><b>Flags affected:</b> C, Z, S, O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Comparison [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=68",
            };

        case "DABS":
            return {
                "html": "<p>This instruction calculates the absolute value of the double-precision floating-point number stored in src and places the result in dest. Denormalized numbers are handled in the same way regardless of the setting of the DDN bit in the DPSW.</p><p><b>Syntax:</b> <code>DABS src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point absolute value [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=228",
            };

        case "DADD":
            return {
                "html": "<p>This instruction adds the double-precision floating-point numbers stored in src2 and src and places the result in dest. Rounding of the result is in accord with the setting of the DRM[1:0] bits in the DPSW. Handling of denormalized numbers depends on the setting of the DDN bit in the DPSW.</p><p><b>Syntax:</b> <code>DADD src, src2, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point addition without carry [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=229",
            };

        case "DCMPEQ":
            return {
                "html": "<p>This instruction compares the double-precision floating-point numbers stored in src2 and src based on the condition specified by cm and indicates the result in the RES bit of the DCMR register. That is, if the numbers satisfy the condition specified by cm, the RES bit becomes 1, and if not, the bit becomes 0.</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point comparison (DCMPEQ) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=231",
            };

        case "DCMPLE":
            return {
                "html": "<p>This instruction compares the double-precision floating-point numbers stored in src2 and src based on the condition specified by cm and indicates the result in the RES bit of the DCMR register. That is, if the numbers satisfy the condition specified by cm, the RES bit becomes 1, and if not, the bit becomes 0.</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point comparison (DCMPLE) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=231",
            };

        case "DCMPLT":
            return {
                "html": "<p>This instruction compares the double-precision floating-point numbers stored in src2 and src based on the condition specified by cm and indicates the result in the RES bit of the DCMR register. That is, if the numbers satisfy the condition specified by cm, the RES bit becomes 1, and if not, the bit becomes 0.</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point comparison (DCMPLT) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=231",
            };

        case "DCMPUN":
            return {
                "html": "<p>This instruction compares the double-precision floating-point numbers stored in src2 and src based on the condition specified by cm and indicates the result in the RES bit of the DCMR register. That is, if the numbers satisfy the condition specified by cm, the RES bit becomes 1, and if not, the bit becomes 0.</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point comparison (DCMPUN) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=231",
            };

        case "DDIV":
            return {
                "html": "<p>This instruction divides the double-precision floating-point number stored in src2 by that stored in src and places the result in dest. Rounding of the result is in accord with the setting of the DRM[1:0] bits in the DPSW. Handling of denormalized numbers depends on the setting of the DDN bit in the DPSW.</p><p><b>Syntax:</b> <code>DDIV src, src2, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point division [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=234",
            };

        case "DIV":
            return {
                "html": "<p>This instruction divides dest by src as signed values and places the quotient in dest. The quotient is rounded towards 0. The calculation is performed in 32 bits and the result is placed in 32 bits.</p><p><b>Syntax:</b> <code>DIV src, dest</code></p><p><b>Flags affected:</b> O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Signed division [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=69",
            };

        case "DIVU":
            return {
                "html": "<p>This instruction divides dest by src as unsigned values and places the quotient in dest. The quotient is rounded towards 0. The calculation is performed in 32 bits and the result is placed in 32 bits.</p><p><b>Syntax:</b> <code>DIVU src, dest</code></p><p><b>Flags affected:</b> O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Unsigned division [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=71",
            };

        case "DMOV":
            return {
                "html": "<p>This instruction transfers src to dest in the ways described in the following table. src dest Function General-purpose register Double-precision floating-point data register Double-precision floating-point data register General-purpose register The data are transferred from the source register (src) to a double-precision floating-point data register (dest).</p><p><b>Syntax:</b> <code>DMOV.size src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point transferring data [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=236",
            };

        case "DMUL":
            return {
                "html": "<p>This instruction multiplies the double-precision floating-point number stored in src2 and src and places the result in dest. Rounding of the result is in accord with the setting of the DRM[1:0] bits in the DPSW. Handling of denormalized numbers depends on the setting of the DDN bit in the DPSW.</p><p><b>Syntax:</b> <code>DMUL src, src2, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point multiplication [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=238",
            };

        case "DNEG":
            return {
                "html": "<p>The instruction negates the double-precision floating-point number stored in src and places the result in dest. Denormalized numbers are handled in the same way regardless of the setting of the DDN bit in the DPSW.</p><p><b>Syntax:</b> <code>DNEG src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point negate [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=240",
            };

        case "DPOPM":
            return {
                "html": "<p>This instruction collectively restores values of double-precision floating-point registers in the range specified by dest and dest2 from the stack. The range is specified by dest and dest2. Note that the register number for dest must be no higher than the register number for dest2.</p><p><b>Syntax:</b> <code>DPOPM.size dest-dest2</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Restoring multiple double-precision floating-point registers [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=241",
            };

        case "DPUSHM":
            return {
                "html": "<p>This instruction collectively places the values of the double-precision floating-point registers in the range specified by src and src2 on the stack. The range is specified by src and src2. Note that the register number for src must be no higher than the register number for src2.</p><p><b>Syntax:</b> <code>DPUSHM.size src-src2</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Saving multiple double-precision floating-point registers [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=243",
            };

        case "DROUND":
            return {
                "html": "<p>This instruction converts the double-precision floating-point number stored in src into a signed longword (32-bit) integer and places the result in the lower 32 bits of dest. The result is rounded according to the setting of the DRM[1:0] bits in the DPSW. The upper 32 bits (bits 63 to 32) of dest are undefined.</p><p><b>Syntax:</b> <code>DROUND src, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Conversion from double-precision floating-point number to signed integer [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=245",
            };

        case "DSQRT":
            return {
                "html": "<p>This instruction calculates the square root of the double-precision floating-point number stored in src and places the result in dest. Rounding of the result is in accord with the setting of the DRM[1:0] bits in the DPSW. Handling of denormalized numbers depends on the setting of the DDN bit in the DPSW.</p><p><b>Syntax:</b> <code>DSQRT src, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point square root [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=248",
            };

        case "DSUB":
            return {
                "html": "<p>This instruction subtracts the double-precision floating-point number stored in src from the one in src2 and places the result in dest. Rounding of the result is in accord with the setting of the DRM[1:0] bits in the DPSW. Handling of denormalized numbers depends on the setting of the DDN bit in the DPSW.</p><p><b>Syntax:</b> <code>DSUB src, src2, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point subtraction [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=250",
            };

        case "DTOF":
            return {
                "html": "<p>This instruction converts the double-precision floating-point number stored in src into a single-precision floating-point number and places the result in the lower 32 bits of dest. Rounding of the result is in accord with the setting of the DRM[1:0] bits in the DPSW. The upper 32 bits (bits 63 to 32) of dest are undefined.</p><p><b>Syntax:</b> <code>DTOF src, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point number to single-precision floating-point number conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=252",
            };

        case "DTOI":
            return {
                "html": "<p>This instruction converts the double-precision floating-point number stored in src into a signed longword (32-bit) integer and places the result in the lower 32 bits of dest. The result is always rounded towards 0, regardless of the setting of the DRM[1:0] bits in the DPSW. The upper 32 bits (bits 63 to 32) of dest are undefined.</p><p><b>Syntax:</b> <code>DTOI src, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point number to signed integer conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=255",
            };

        case "DTOU":
            return {
                "html": "<p>This instruction converts the double-precision floating-point number stored in src into an unsigned longword (32-bit) integer and places the result in the lower 32 bits of dest. The result is always rounded towards 0, regardless of the setting of the DRM[1:0] bits in the DPSW. The upper 32 bits (bits 63 to 32) of dest are undefined.</p><p><b>Syntax:</b> <code>DTOU src, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Double-precision floating-point number to unsigned integer conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=257",
            };

        case "EMACA":
            return {
                "html": "<p>This instruction multiplies src by src2, and adds the result to the value in the accumulator (ACC). The result of addition is stored in ACC. src and src2 are treated as signed integers.</p><p><b>Syntax:</b> <code>EMACA src, src2, Adest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Extended multiply-accumulate to the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=80",
            };

        case "EMSBA":
            return {
                "html": "<p>This instruction multiplies src by src2, and subtracts the result to the value in the accumulator (ACC). The result of subtraction is stored in ACC. src and src2 are treated as signed integers.</p><p><b>Syntax:</b> <code>EMSBA src, src2, Adest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Extended multiply-subtract to the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=81",
            };

        case "EMUL":
            return {
                "html": "<p>This instruction multiplies dest by src, treating both as signed values. The calculation is performed on src and dest as 32-bit operands to obtain a 64-bit result, which is placed in the register pair, dest2:dest (R(n+1):Rn). Any of the 15 general registers (Rn (n:</p><p><b>Syntax:</b> <code>EMUL src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Signed multiplication [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=73",
            };

        case "EMULA":
            return {
                "html": "<p>This instruction multiplies src by src2, and places the result in the accumulator (ACC). src and src2 are treated as signed integers.</p><p><b>Syntax:</b> <code>EMULA src, src2, Adest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Extended multiply to the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=84",
            };

        case "EMULU":
            return {
                "html": "<p>This instruction multiplies dest by src, treating both as unsigned values. The calculation is performed on src and dest as 32-bit operands to obtain a 64-bit result, which is placed in the register pair, dest2:dest (R(n+1):Rn). Any of the 15 general registers (Rn (n:</p><p><b>Syntax:</b> <code>EMULU src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Unsigned multiplication [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=75",
            };

        case "FADD":
            return {
                "html": "<p>This instruction adds the single-precision floating-point numbers stored in dest and src and places the result in dest. Rounding of the result is in accord with the setting of the RM[1:0] bits in the FPSW. Handling of denormalized numbers depends on the setting of the DN bit in the FPSW.</p><p><b>Syntax:</b> <code>FADD src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Floating-point addition [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=77",
            };

        case "FCMP":
            return {
                "html": "<p>This instruction compares the single-precision floating numbers stored in src2 and src and changes the states of flags according to the result. Handling of denormalized numbers depends on the setting of the DN bit in the FPSW.</p><p><b>Syntax:</b> <code>FCMP src, src2</code></p><p><b>Flags affected:</b> Z, S, O, O, S, Z</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Floating-point comparison [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=79",
            };

        case "FDIV":
            return {
                "html": "<p>This instruction divides the single-precision floating-point number stored in dest by that stored in src and places the result in dest. Rounding of the result is in accord with the setting of the RM[1:0] bits in the FPSW. Handling of denormalized numbers depends on the setting of the DN bit in the FPSW.</p><p><b>Syntax:</b> <code>FDIV src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Floating-point division [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=82",
            };

        case "FMUL":
            return {
                "html": "<p>This instruction multiplies the single-precision floating-point number stored in dest by that stored in src and places the result in dest. Rounding of the result is in accord with the setting of the RM[1:0] bits in the FPSW. Handling of denormalized numbers depends on the setting of the DN bit in the FPSW.</p><p><b>Syntax:</b> <code>FMUL src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Floating-point multiplication [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=84",
            };

        case "FSQRT":
            return {
                "html": "<p>This instruction calculates the square root of the single-precision floating-point number stored in src and places the result in dest. Rounding of the result is in accord with the setting of the RM[1:0] bits in the FPSW. Handling of denormalized numbers depends on the setting of the DN bit in the FPSW.</p><p><b>Syntax:</b> <code>FSQRT src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Floating-point square root [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=98",
            };

        case "FSUB":
            return {
                "html": "<p>This instruction subtracts the single-precision floating-point number stored in src from that stored in dest and places the result in dest. Rounding of the result is in accord with the setting of the RM[1:0] bits in the FPSW. Handling of denormalized numbers depends on the setting of the DN bit in the FPSW.</p><p><b>Syntax:</b> <code>FSUB src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Floating-point subtraction [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=87",
            };

        case "FTOD":
            return {
                "html": "<p>This instruction converts the single-precision floating-point number stored in src into a double-precision floating-point number and places the result in dest.</p><p><b>Syntax:</b> <code>FTOD src, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Single-precision floating-point number to double-precision floating-point number conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=259",
            };

        case "FTOI":
            return {
                "html": "<p>This instruction converts the single-precision floating-point number stored in src into a signed longword (32-bit) integer and places the result in dest. The result is always rounded towards 0, regardless of the setting of the RM[1:0] bits in the FPSW.</p><p><b>Syntax:</b> <code>FTOI src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Floating point to integer conversion [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=90",
            };

        case "FTOU":
            return {
                "html": "<p>This instruction converts the single-precision floating-point number stored in src into an unsigned longword (32-bit) integer and places the result in dest. The result is always rounded towards 0, regardless of the setting of the RM[1:0] bits in the FPSW.</p><p><b>Syntax:</b> <code>FTOU src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Floating point to unsigned integer conversion [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=106",
            };

        case "INT":
            return {
                "html": "<p>This instruction generates the unconditional trap which corresponds to the number specified as src. The INT instruction number (src) is in the range 0 src 255. This instruction causes a transition to supervisor mode, and clears the PM bit in the PSW to 0.</p><p><b>Syntax:</b> <code>INT src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Software interrupt [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=93",
            };

        case "ITOD":
            return {
                "html": "<p>This instruction converts the signed longword (32-bit) integer stored in src into a double-precision floating-point number and places the result in dest.</p><p><b>Syntax:</b> <code>ITOD src, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Signed integer to double-precision floating-point number conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=261",
            };

        case "ITOF":
            return {
                "html": "<p>This instruction converts the signed longword (32-bit) integer stored in src into a single-precision floating-point number and places the result in dest. Rounding of the result is in accord with the setting of the RM[1:0] bits in the FPSW. 00000000h is handled as +0 regardless of the rounding mode.</p><p><b>Syntax:</b> <code>ITOF src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Integer to floating-point conversion [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=94",
            };

        case "JMP":
            return {
                "html": "<p>This instruction branches to the instruction specified by src.</p><p><b>Syntax:</b> <code>JMP src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Unconditional jump [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=96",
            };

        case "JSR":
            return {
                "html": "<p>This instruction causes the flow of execution to branch to the subroutine specified by src.</p><p><b>Syntax:</b> <code>JSR src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Jump to a subroutine [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=97",
            };

        case "MACHI":
            return {
                "html": "<p>This instruction multiplies the higher-order 16 bits of src by the higher-order 16 bits of src2, and adds the result to the value in the accumulator (ACC). The addition is performed with the least significant bit of the result of multiplication corresponding to bit 16 of ACC. The result of addition is stored in ACC.</p><p><b>Syntax:</b> <code>MACHI src, src2</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Multiply-Accumulate the high-order word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=98",
            };

        case "MACLO":
            return {
                "html": "<p>This instruction multiplies the lower-order 16 bits of src by the lower-order 16 bits of src2, and adds the result to the value in the accumulator (ACC). The addition is performed with the least significant bit of the result of multiplication corresponding to bit 16 of ACC. The result of addition is stored in ACC.</p><p><b>Syntax:</b> <code>MACLO src, src2</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Multiply-Accumulate the low-order word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=99",
            };

        case "MAX":
            return {
                "html": "<p>This instruction compares src and dest as signed values and places whichever is greater in dest.</p><p><b>Syntax:</b> <code>MAX src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Selecting the highest value [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=100",
            };

        case "MIN":
            return {
                "html": "<p>This instruction compares src and dest as signed values and places whichever is smaller in dest.</p><p><b>Syntax:</b> <code>MIN src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Selecting the lowest value [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=101",
            };

        case "MOV":
            return {
                "html": "<p>This instruction transfers src to dest as listed in the following table.</p><p><b>Syntax:</b> <code>MOV.size src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Transferring data [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=102",
            };

        case "MOVCO":
            return {
                "html": "<p>MOVCO When the LI flag is 1, data in src (register) is stored in dest (memory) and the LI flag and src are cleared to 0. When the LI flag is 0, data is not stored in src. Instead, 1 is set to src.</p><p><b>Syntax:</b> <code>MOVCO src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Storing with LI flag clear [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=122",
            };

        case "MOVLI":
            return {
                "html": "<p>This instruction transfers the longword data in src (memory) to dest (register). This instruction sets the LI flag along with the normal load operation. The LI flag is cleared when the conditions below are satisfied.</p><p><b>Syntax:</b> <code>MOVLI src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Loading with LI flag set [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=123",
            };

        case "MOVU":
            return {
                "html": "<p>This instruction transfers src to dest as listed in the following table.</p><p><b>Syntax:</b> <code>MOVU.size src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Transfer unsigned data [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=105",
            };

        case "MSBHI":
            return {
                "html": "<p>This instruction multiplies the higher-order 16 bits of src by the higher-order 16 bits of src2, and subtracts the result from the value in the accumulator (ACC). The subtraction is performed with the least significant bit of the result of multiplication corresponding to bit 16 of ACC. The result of subtraction is stored in ACC.</p><p><b>Syntax:</b> <code>MSBHI src, src2, Adest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Multiply-Subtract the higher-order word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=126",
            };

        case "MSBLH":
            return {
                "html": "<p>This instruction multiplies the lower-order 16 bits of src by the higher-order 16 bits of src2, and subtracts the result from the value in the accumulator (ACC). The subtraction is performed with the least significant bit of the result of multiplication corresponding to bit 16 of ACC. The result of subtraction is stored in ACC.</p><p><b>Syntax:</b> <code>MSBLH src, src2, Adest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Multiply-Subtract the lower-order word and higher-order word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=127",
            };

        case "MSBLO":
            return {
                "html": "<p>This instruction multiplies the lower-order 16 bits of src by the lower-order 16 bits of src2, and subtracts the result from the value in the accumulator (ACC). The subtraction is performed with the least significant bit of the result of multiplication corresponding to bit 16 of ACC. The result of subtraction is stored in ACC.</p><p><b>Syntax:</b> <code>MSBLO src, src2, Adest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Multiply-Subtract the lower-order word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=128",
            };

        case "MUL":
            return {
                "html": "<p>(1) This instruction multiplies src and dest and places the result in dest. The calculation is performed in 32 bits and the lower-order 32 bits of the result are placed. The operation result will be the same whether a singed or unsigned multiply is executed.</p><p><b>Syntax:</b> <code>(1) MUL src, dest ; (2) MUL src, src2, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Multiplication [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=107",
            };

        case "MULHI":
            return {
                "html": "<p>This instruction multiplies the higher-order 16 bits of src by the higher-order 16 bits of src2, and stores the result in the accumulator (ACC). When the result is stored, the least significant bit of the result corresponds to bit 16 of ACC, and the section corresponding to bits 63 to 48 of ACC is sign-extended.</p><p><b>Syntax:</b> <code>MULHI src, src2</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Multiply the high-order word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=109",
            };

        case "MULLH":
            return {
                "html": "<p>This instruction multiplies the lower-order 16 bits of src by the higher-order 16 bits of src2, and stores the result in the accumulator (ACC). When the result is stored, the least significant bit of the result corresponds to bit 16 of ACC, and the section corresponding to bits 71 to 48 of ACC is sign-extended.</p><p><b>Syntax:</b> <code>MULLH src, src2, Adest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Multiply the lower-order word and higher-order word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=132",
            };

        case "MULLO":
            return {
                "html": "<p>This instruction multiplies the lower-order 16 bits of src by the lower-order 16 bits of src2, and stores the result in the accumulator (ACC). When the result is stored, the least significant bit of the result corresponds to bit 16 of ACC, and the section corresponding to bits 63 to 48 of ACC is sign-extended.</p><p><b>Syntax:</b> <code>MULLO src, src2</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Multiply the low-order word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=110",
            };

        case "MVFACGU":
            return {
                "html": "<p>This instruction moves the higher-order 32 bits of the accumulator (ACC) to dest.</p><p><b>Syntax:</b> <code>MVFACGU src, Asrc, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Move the guard longword from the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=134",
            };

        case "MVFACHI":
            return {
                "html": "<p>This instruction moves the higher-order 32 bits of the accumulator (ACC) to dest.</p><p><b>Syntax:</b> <code>MVFACHI dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Move the high-order longword from accumulator [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=111",
            };

        case "MVFACLO":
            return {
                "html": "<p>This instruction moves the contents of bits 31 to 0 of the accumulator (ACC) to dest.</p><p><b>Syntax:</b> <code>MVFACLO src, Asrc, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Move the lower-order longword from the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=136",
            };

        case "MVFACMI":
            return {
                "html": "<p>This instruction moves the contents of bits 47 to 16 of the accumulator (ACC) to dest.</p><p><b>Syntax:</b> <code>MVFACMI dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Move the middle-order longword from accumulator [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=112",
            };

        case "MVFC":
            return {
                "html": "<p>This instruction transfers src to dest. When the PC is specified as src, this instruction pushes its own address onto the stack.</p><p><b>Syntax:</b> <code>MVFC src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Transfer from a control register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=113",
            };

        case "MVFDC":
            return {
                "html": "<p>This instruction transfers src to dest.</p><p><b>Syntax:</b> <code>MVFDC src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Transfer from double-precision floating-point control register [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=262",
            };

        case "MVFDR":
            return {
                "html": "<p>This instruction transfers the value of the RES bit in the DCMR to the Z flag of the PWS.</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Transfer from double-precision floating-point comparison result register [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=263",
            };

        case "MVTACGU":
            return {
                "html": "<p>This instruction moves the contents of src to the most significant 32 bits (bits 95 to 64) of the accumulator (ACC).</p><p><b>Syntax:</b> <code>MVTACGU src, Adest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Move the guard longword to the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=139",
            };

        case "MVTACHI":
            return {
                "html": "<p>This instruction moves the contents of src to the higher-order 32 bits (bits 63 to 32) of the accumulator (ACC).</p><p><b>Syntax:</b> <code>MVTACHI src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Move the high-order longword to accumulator [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=114",
            };

        case "MVTACLO":
            return {
                "html": "<p>This instruction moves the contents of src to the lower-order 32 bits (bits 31 to 0) of the accumulator (ACC).</p><p><b>Syntax:</b> <code>MVTACLO src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Move the low-order longword to accumulator [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=115",
            };

        case "MVTC":
            return {
                "html": "<p>This instruction transfers src to dest. In user mode, writing to the ISP, INTB, BPC, BPSW, and FINTV, and the IPL[3:0], PM, U, and I bits in the PSW is ignored. In supervisor mode, writing to the PM bit in the PSW is ignored.</p><p><b>Syntax:</b> <code>MVTC src, dest</code></p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Transfer to a control register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=116",
            };

        case "MVTDC":
            return {
                "html": "<p>This instruction transfers src to dest.</p><p><b>Syntax:</b> <code>MVTDC src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Transfer to double-precision floating-point control register [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=264",
            };

        case "MVTIPL":
            return {
                "html": "<p>This instruction transfers src to the IPL[3:0] bits in the PSW. This instruction is a privileged instruction. Attempting to execute this instruction in user mode generates a privileged instruction exception.</p><p><b>Syntax:</b> <code>MVTIPL src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Interrupt priority level setting (privileged instruction) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=117",
            };

        case "NEG":
            return {
                "html": "<p>(1) This instruction arithmetically inverts (takes the two's complement of) dest and places the result in dest. (2) This instruction arithmetically inverts (takes the two's complement of) src and places the result in dest.</p><p><b>Syntax:</b> <code>(1) NEG dest ; (2) NEG src, dest</code></p><p><b>Flags affected:</b> C, Z, S, O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Two's complementation [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=118",
            };

        case "NOP":
            return {
                "html": "<p>This instruction executes no process. The operation will be continued from the next instruction.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "No operation [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=119",
            };

        case "NOT":
            return {
                "html": "<p>(1) This instruction logically inverts dest and places the result in dest. (2) This instruction logically inverts src and places the result in dest.</p><p><b>Syntax:</b> <code>(1) NOT dest ; (2) NOT src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Logical complementation [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=120",
            };

        case "OR":
            return {
                "html": "<p>(1) This instruction takes the logical OR of dest and src and places the result in dest. (2) This instruction takes the logical OR of src and src2 and places the result in dest.</p><p><b>Syntax:</b> <code>(1) OR src, dest ; (2) OR src, src2, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Logical OR [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=121",
            };

        case "POP":
            return {
                "html": "<p>This instruction restores data from the stack and transfers it to dest. The stack pointer in use is specified by the U bit in the PSW.</p><p><b>Syntax:</b> <code>POP dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Restoring data from stack to register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=123",
            };

        case "POPC":
            return {
                "html": "<p>This instruction restores data from the stack and transfers it to the control register specified as dest. The stack pointer in use is specified by the U bit in the PSW. In user mode, writing to the ISP, INTB, BPC, BPSW, and FINTV, and the IPL[3:0], PM, U, and I bits in the PSW is ignored.</p><p><b>Syntax:</b> <code>POPC dest</code></p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Restoring a control register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=124",
            };

        case "POPM":
            return {
                "html": "<p>This instruction restores values from the stack to the block of registers in the range specified by dest and dest2. The range is specified by first and last register numbers. Note that the condition (first register number &lt; last register number) must be satisfied.</p><p><b>Syntax:</b> <code>POPM dest-dest2</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Restoring multiple registers from the stack [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=125",
            };

        case "PUSH":
            return {
                "html": "<p>This instruction pushes src onto the stack. When src is in register and the size specifier for the PUSH instruction is .B or .W, the byte or word of data from the LSB in the register are saved respectively. The transfer to the stack is processed in longwords.</p><p><b>Syntax:</b> <code>PUSH.size src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Saving data on the stack [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=126",
            };

        case "PUSHC":
            return {
                "html": "<p>This instruction pushes the control register specified by src onto the stack. The stack pointer in use is specified by the U bit in the PSW. When the PC is specified as src, this instruction pushes its own address onto the stack.</p><p><b>Syntax:</b> <code>PUSHC src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Saving a control register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=127",
            };

        case "PUSHM":
            return {
                "html": "<p>This instruction saves values to the stack from the block of registers in the range specified by src and src2. The range is specified by first and last register numbers. Note that the condition (first register number &lt; last register number) must be satisfied.</p><p><b>Syntax:</b> <code>PUSHM src-src2</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Saving multiple registers [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=128",
            };

        case "RACL":
            return {
                "html": "<p>This instruction rounds the value of the accumulator into a longword and stores the result in the accumulator.</p><p><b>Syntax:</b> <code>RACL src, Adest</code></p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Round the accumulator longword [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=155",
            };

        case "RACW":
            return {
                "html": "<p>This instruction rounds the value of the accumulator into a word and stores the result in the accumulator.</p><p><b>Syntax:</b> <code>RACW src</code></p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Round the accumulator word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=129",
            };

        case "RDACL":
            return {
                "html": "<p>This instruction rounds the value of the accumulator into a longword and stores the result in the accumulator.</p><p><b>Syntax:</b> <code>RDACL src, Adest</code></p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Round the accumulator longword [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=159",
            };

        case "RDACW":
            return {
                "html": "<p>This instruction rounds the value of the accumulator into a word and stores the result in the accumulator.</p><p><b>Syntax:</b> <code>RDACW src, Adest</code></p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Round the accumulator word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=161",
            };

        case "REVL":
            return {
                "html": "<p>This instruction converts the endian byte order within a 32-bit datum, which is specified by src, and saves the result in dest.</p><p><b>Syntax:</b> <code>REVL src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Endian conversion (longword) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=131",
            };

        case "REVW":
            return {
                "html": "<p>This instruction converts the endian byte order within the higher- and lower-order 16-bit data, which are specified by src, and saves the result in dest.</p><p><b>Syntax:</b> <code>REVW src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Endian conversion (word) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=132",
            };

        case "RMPA":
            return {
                "html": "<p>This instruction performs a multiply-and-accumulate operation with the multiplicand addresses specified by R1, the multiplier addresses specified by R2, and the number of multiply-and-accumulate operations specified by R3. The operands and result are handled as signed values, and the result is placed in R6:R5:R4 as an 80-bit datum.</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Multiply-and-accumulate operation [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=133",
            };

        case "ROLC":
            return {
                "html": "<p>This instruction treats dest and the C flag as a unit, rotating the whole one bit to the left.</p><p><b>Syntax:</b> <code>ROLC dest</code></p><p><b>Flags affected:</b> C, Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Rotation with carry to left [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=135",
            };

        case "RORC":
            return {
                "html": "<p>This instruction treats dest and the C flag as a unit, rotating the whole one bit to the right.</p><p><b>Syntax:</b> <code>RORC dest</code></p><p><b>Flags affected:</b> C, Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Rotation with carry to right [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=136",
            };

        case "ROTL":
            return {
                "html": "<p>This instruction rotates dest leftward by the number of bit positions specified by src and saves the value in dest. Bits overflowing from the MSB are transferred to the LSB and to the C flag. src is an unsigned integer in the range of 0 src 31.</p><p><b>Syntax:</b> <code>ROTL src, dest</code></p><p><b>Flags affected:</b> C, Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Rotation to left [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=137",
            };

        case "ROTR":
            return {
                "html": "<p>This instruction rotates dest rightward by the number of bit positions specified by src and saves the value in dest. Bits overflowing from the LSB are transferred to the MSB and to the C flag. src is an unsigned integer in the range of 0 src 31.</p><p><b>Syntax:</b> <code>ROTR src, dest</code></p><p><b>Flags affected:</b> C, Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Rotation to right [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=138",
            };

        case "ROUND":
            return {
                "html": "<p>This instruction converts the single-precision floating-point number stored in src into a signed longword (32-bit) integer and places the result in dest. The result is rounded according to the setting of the RM[1:0] bits in the FPSW.</p><p><b>Syntax:</b> <code>ROUND src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Conversion from floating-point to integer [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=139",
            };

        case "RSTR":
            return {
                "html": "<p>This instruction collectively restores the values in a save register bank to CPU registers (R1 to R15, USP, FPSW, ACC0, and ACC1). The bank number of the source for restoration is specified by src. This instruction is privileged.</p><p><b>Syntax:</b> <code>RSTR src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Collective restoration of register values (privileged instruction) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=225",
            };

        case "RTE":
            return {
                "html": "<p>This instruction returns execution from the exception handling routine by restoring the PC and PSW contents that were preserved when the exception was accepted. This instruction is a privileged instruction. Attempting to execute this instruction in user mode generates a privileged instruction exception.</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Return from the exception (privileged instruction) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=142",
            };

        case "RTFI":
            return {
                "html": "<p>This instruction returns execution from the fast-interrupt handler by restoring the PC and PSW contents that were saved in the BPC and BPSW when the fast interrupt request was accepted. This instruction is a privileged instruction. Attempting to execute this instruction in user mode generates a privileged instruction exception.</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Return from the fast interrupt (privileged instruction) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=143",
            };

        case "RTS":
            return {
                "html": "<p>This instruction returns the flow of execution from a subroutine.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Returning from a subroutine [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=144",
            };

        case "RTSD":
            return {
                "html": "<p>(1) This instruction returns the flow of execution from a subroutine after deallocating the stack frame for the subroutine. Specify src to be the size of the stack frame (auto conversion area).</p><p><b>Syntax:</b> <code>(1) RTSD src ; (2) RTSD src, dest-dest2</code></p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Releasing stack frame and returning from subroutine [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=145",
            };

        case "SAT":
            return {
                "html": "<p>This instruction performs a 32-bit signed saturation operation. When the O flag is 1 and the S flag is 1, the result of the operation is 7FFFFFFFh and it is placed in dest. When the O flag is 1 and the S flag is 0, the result of the operation is 80000000h and it is placed in dest.</p><p><b>Syntax:</b> <code>SAT dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Saturation of signed 32-bit data [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=147",
            };

        case "SATR":
            return {
                "html": "<p>This instruction performs a 64-bit signed saturation operation. When the O flag is 1 and the S flag is 0, the result of the operation is 000000007FFFFFFFFFFFFFFFh and it is placed in R6:R5:R4. When the O flag is 1 and the S flag is 1, the result of the operation is FFFFFFFF8000000000000000h and it is place in R6:R5:R4.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Saturation of signed 64-bit data for RMPA [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=148",
            };

        case "SAVE":
            return {
                "html": "<p>This instruction collectively saves the values of CPU registers (R1 to R15, USP, FPSW, ACC0, and ACC1) in a save register bank. The bank number of the destination for saving is specified by src. This instruction is privileged.</p><p><b>Syntax:</b> <code>SAVE src</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Collective saving of register values (privileged instruction) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=226",
            };

        case "SBB":
            return {
                "html": "<p>This instruction subtracts src and the inverse of the C flag (borrow) from dest and places the result in dest.</p><p><b>Syntax:</b> <code>SBB src, dest</code></p><p><b>Flags affected:</b> C, Z, S, O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Subtraction with borrow [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=149",
            };

        case "SCC":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCEQ":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCEQ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCGE":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCGE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCGEU":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCGEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCGT":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCGT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCGTU":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCGTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCLE":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCLE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCLEU":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCLEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCLT":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCLT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCLTU":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCLTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCMPU":
            return {
                "html": "<p>This instruction compares strings in successively higher addresses specified by R1, which indicates the source address for comparision, and R2, which indicates the destination address for comparision, until the values do not match or the null character \"\\0\" (= 00h) is detected, with the number of bytes specified by R3 as the upper limit.</p><p><b>Flags affected:</b> C, Z</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "String comparison [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=152",
            };

        case "SCN":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCN) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCNC":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCNC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCNE":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCNE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCNO":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCNO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCNZ":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCNZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCO":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCPZ":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCPZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCZ":
            return {
                "html": "<p>This instruction moves the truth-value of the condition specified by Cnd to dest; that is, 1 or 0 is stored to dest if the condition is true or false, respectively. The following table lists the types of SCCnd.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Condition setting (SCZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SETPSW":
            return {
                "html": "<p>This instruction clears the O, S, Z, or C flag, which is specified by dest, or the U or I bit. In user mode, writing to the U or I bit in the PSW will be ignored. In supervisor mode, all flags and bits can be written to.</p><p><b>Syntax:</b> <code>SETPSW dest</code></p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Setting a flag or bit in the PSW [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=153",
            };

        case "SHAR":
            return {
                "html": "<p>(1) This instruction arithmetically shifts dest to the right by the number of bit positions specified by src and saves the value in dest. Bits overflowing from the LSB are transferred to the C flag. When src is in register, only five bits in the LSB are valid.</p><p><b>Syntax:</b> <code>(1) SHAR src, dest ; (2) SHAR src, src2, dest</code></p><p><b>Flags affected:</b> C, Z, S, O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Arithmetic shift to the right [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=154",
            };

        case "SHLL":
            return {
                "html": "<p>(1) This instruction arithmetically shifts dest to the left by the number of bit positions specified by src and saves the value in dest. Bits overflowing from the MSB are transferred to the C flag. When src is in register, only five bits in the LSB are valid.</p><p><b>Syntax:</b> <code>(1) SHLL src, dest ; (2) SHLL src, src2, dest</code></p><p><b>Flags affected:</b> C, Z, S, O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Logical and arithmetic shift to the left [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=155",
            };

        case "SHLR":
            return {
                "html": "<p>(1) This instruction logically shifts dest to the right by the number of bit positions specified by src and saves the value in dest. Bits overflowing from the LSB are transferred to the C flag. src is an unsigned integer in the range of 0 src 31.</p><p><b>Syntax:</b> <code>(1) SHLR src, dest ; (2) SHLR src, src2, dest</code></p><p><b>Flags affected:</b> C, Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Logical shift to the right [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=156",
            };

        case "SMOVB":
            return {
                "html": "<p>This instruction transfers a string consisting of the number of bytes specified by R3 from the source address specified by R2 to the destination address specified by R1, with transfer proceeding in the direction of decreasing addresses. In execution of the instruction, data may be prefetched from the source address specified by R2, with R3 as the upper limit.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Transferring a string backward [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=157",
            };

        case "SMOVF":
            return {
                "html": "<p>This instruction transfers a string consisting of the number of bytes specified by R3 from the source address specified by R2 to the destination address specified by R1, with transfer proceeding in the direction of increasing addresses. In execution of the instruction, data may be prefetched from the source address specified by R2, with R3 as the upper limit.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Transferring a string forward [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=158",
            };

        case "SMOVU":
            return {
                "html": "<p>This instruction transfers strings successively from the source address specified by R2 to the higher destination addresses specified by R1 until the null character \"\\0\" (= 00h) is detected, with the number of bytes specified by R3 as the upper limit. String transfer is completed after the null character has been transferred.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Transferring a string [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=159",
            };

        case "SSTR":
            return {
                "html": "<p>This instruction stores the contents of R2 successively proceeding in the direction of increasing addresses specified by R1 up to the number specified by R3. On completion of instruction execution, R1 indicates the next address in sequence from that for the last transfer. An interrupt request during execution of this instruction will be accepted, so processing of the instruction will be suspended.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Storing a string [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=160",
            };

        case "STNZ":
            return {
                "html": "<p>This instruction moves src to dest when the Z flag is 0. dest does not change when the Z flag is 1.</p><p><b>Syntax:</b> <code>STNZ src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Transfer with condition (on not zero) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=161",
            };

        case "STZ":
            return {
                "html": "<p>This instruction moves src to dest when the Z flag is 1. dest does not change when the Z flag is 0.</p><p><b>Syntax:</b> <code>STZ src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Transfer with condition (on zero) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=162",
            };

        case "SUB":
            return {
                "html": "<p>(1) This instruction subtracts src from dest and places the result in dest. (2) This instruction subtracts src from src2 and places the result in dest.</p><p><b>Syntax:</b> <code>(1) SUB src, dest ; (2) SUB src, src2, dest</code></p><p><b>Flags affected:</b> C, Z, S, O</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Subtraction without borrow [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=163",
            };

        case "SUNTIL":
            return {
                "html": "<p>This instruction searches a string for comparison from the first address specified by R1 for a match with the value specified in R2, with the search proceeding in the direction of increasing addresses and the number specified by R3 as the upper limit on the number of comparisons. When the size specifier (.size) is .B or .W, the byte or word data on the memory is compared with the value in R2 after being zero-extended to form a longword of data.</p><p><b>Flags affected:</b> C, Z</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Searching for a string (until match) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=164",
            };

        case "SWHILE":
            return {
                "html": "<p>This instruction searches a string for comparison from the first address specified by R1 for an unmatch with the value specified in R2, with the search proceeding in the direction of increasing addresses and the number specified by R3 as the upper limit on the number of comparisons. When the size specifier (.size) is.</p><p><b>Flags affected:</b> C, Z</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Searching for a string (while match) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=166",
            };

        case "TST":
            return {
                "html": "<p>This instruction changes the flag states in the PSW according to the result of logical AND of src2 and src.</p><p><b>Syntax:</b> <code>TST src, src2</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Logical test [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=168",
            };

        case "UTOD":
            return {
                "html": "<p>This instruction converts the unsigned longword (32-bit) integer stored in src into a double-precision floating-point number and places the result in dest.</p><p><b>Syntax:</b> <code>UTOD src, dest</code></p><p><i>RX instruction (introduced in RXv3).</i></p>",
                "tooltip": "Unsigned integer to double-precision floating-point number conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=265",
            };

        case "UTOF":
            return {
                "html": "<p>This instruction converts the signed longword (32-bit) integer stored in src into a single-precision floating-point number and places the result in dest. Rounding of the result is in accord with the setting of the RM[1:0] bits in the FPSW. 00000000h is handled as +0 regardless of the rounding mode.</p><p><b>Syntax:</b> <code>UTOF src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv2).</i></p>",
                "tooltip": "Unsigned integer to floating-point conversion [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=201",
            };

        case "WAIT":
            return {
                "html": "<p>This instruction stops program execution. Program execution is then restarted by acceptance of a non-maskable interrupt, interrupt, or generation of a reset. This instruction is a privileged instruction.</p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Waiting (privileged instruction) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=169",
            };

        case "XCHG":
            return {
                "html": "<p>This instruction exchanges the contents of src and dest as listed in the following table.</p><p><b>Syntax:</b> <code>XCHG src, dest</code></p><p><b>Flags affected:</b> none</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Exchanging values [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=170",
            };

        case "XOR":
            return {
                "html": "<p>This instruction exclusive-ORs dest and src and places the result in dest.</p><p><b>Syntax:</b> <code>XOR src, dest</code></p><p><b>Flags affected:</b> Z, S</p><p><i>RX instruction (introduced in RXv1).</i></p>",
                "tooltip": "Logical exclusive or [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=172",
            };
    }
}
