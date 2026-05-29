// Generated from the Renesas RX instruction-set manuals
// (RXv1 R01US0032EJ0120 Rev.1.20, RXv2 R01US0071EJ0100 Rev.1.00, RXv3 R01US0316EJ0100 Rev.1.00) by docenizer-rx.py. Do not edit by hand.
import type {AssemblyInstructionInfo} from '../../../types/assembly-docs.interfaces.js';

export function getAsmOpcode(opcode: string | undefined): AssemblyInstructionInfo | undefined {
    if (!opcode) return;
    switch (opcode.toUpperCase()) {
        case "ABS":
            return {
                "html": "<p>Absolute value. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Absolute value [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=51",
            };

        case "ADC":
            return {
                "html": "<p>Addition with carry. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Addition with carry [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=52",
            };

        case "ADD":
            return {
                "html": "<p>Addition without carry. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Addition without carry [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=53",
            };

        case "AND":
            return {
                "html": "<p>Logical AND. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Logical AND [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=55",
            };

        case "BC":
            return {
                "html": "<p>Relative conditional branch (BC). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BCLR":
            return {
                "html": "<p>Clearing a bit. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Clearing a bit [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=57",
            };

        case "BEQ":
            return {
                "html": "<p>Relative conditional branch (BEQ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BEQ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BFMOV":
            return {
                "html": "<p>Transferring bit-fields. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Transferring bit-fields [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=81",
            };

        case "BFMOVZ":
            return {
                "html": "<p>Transferring a bit-field and setting the other bits at the destination to zero. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Transferring a bit-field and setting the other bits at the destination to zero [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=82",
            };

        case "BGE":
            return {
                "html": "<p>Relative conditional branch (BGE). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BGE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BGEU":
            return {
                "html": "<p>Relative conditional branch (BGEU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BGEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BGT":
            return {
                "html": "<p>Relative conditional branch (BGT). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BGT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BGTU":
            return {
                "html": "<p>Relative conditional branch (BGTU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BGTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BLE":
            return {
                "html": "<p>Relative conditional branch (BLE). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BLE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BLEU":
            return {
                "html": "<p>Relative conditional branch (BLEU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BLEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BLT":
            return {
                "html": "<p>Relative conditional branch (BLT). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BLT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BLTU":
            return {
                "html": "<p>Relative conditional branch (BLTU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BLTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BMC":
            return {
                "html": "<p>Conditional bit transfer (BMC). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMEQ":
            return {
                "html": "<p>Conditional bit transfer (BMEQ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMEQ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMGE":
            return {
                "html": "<p>Conditional bit transfer (BMGE). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMGE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMGEU":
            return {
                "html": "<p>Conditional bit transfer (BMGEU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMGEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMGT":
            return {
                "html": "<p>Conditional bit transfer (BMGT). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMGT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMGTU":
            return {
                "html": "<p>Conditional bit transfer (BMGTU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMGTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMLE":
            return {
                "html": "<p>Conditional bit transfer (BMLE). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMLE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMLEU":
            return {
                "html": "<p>Conditional bit transfer (BMLEU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMLEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMLT":
            return {
                "html": "<p>Conditional bit transfer (BMLT). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMLT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMLTU":
            return {
                "html": "<p>Conditional bit transfer (BMLTU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMLTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMN":
            return {
                "html": "<p>Conditional bit transfer (BMN). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMN) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMNC":
            return {
                "html": "<p>Conditional bit transfer (BMNC). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMNC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMNE":
            return {
                "html": "<p>Conditional bit transfer (BMNE). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMNE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMNO":
            return {
                "html": "<p>Conditional bit transfer (BMNO). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMNO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMNZ":
            return {
                "html": "<p>Conditional bit transfer (BMNZ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMNZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMO":
            return {
                "html": "<p>Conditional bit transfer (BMO). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMPZ":
            return {
                "html": "<p>Conditional bit transfer (BMPZ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMPZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BMZ":
            return {
                "html": "<p>Conditional bit transfer (BMZ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conditional bit transfer (BMZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=59",
            };

        case "BN":
            return {
                "html": "<p>Relative conditional branch (BN). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BN) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BNC":
            return {
                "html": "<p>Relative conditional branch (BNC). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BNC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BNE":
            return {
                "html": "<p>Relative conditional branch (BNE). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BNE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BNO":
            return {
                "html": "<p>Relative conditional branch (BNO). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BNO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BNOT":
            return {
                "html": "<p>Inverting a bit. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Inverting a bit [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=61",
            };

        case "BNZ":
            return {
                "html": "<p>Relative conditional branch (BNZ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BNZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BO":
            return {
                "html": "<p>Relative conditional branch (BO). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BPZ":
            return {
                "html": "<p>Relative conditional branch (BPZ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BPZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "BRA":
            return {
                "html": "<p>Unconditional relative branch. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Unconditional relative branch [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=62",
            };

        case "BRK":
            return {
                "html": "<p>Unconditional trap. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Unconditional trap [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=63",
            };

        case "BSET":
            return {
                "html": "<p>Setting a bit. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Setting a bit [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=64",
            };

        case "BSR":
            return {
                "html": "<p>Relative subroutine branch. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative subroutine branch [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=65",
            };

        case "BTST":
            return {
                "html": "<p>Testing a bit. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Testing a bit [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=66",
            };

        case "BZ":
            return {
                "html": "<p>Relative conditional branch (BZ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Relative conditional branch (BZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=58",
            };

        case "CLRPSW":
            return {
                "html": "<p>Clear a flag or bit in the PSW. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Clear a flag or bit in the PSW [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=67",
            };

        case "CMP":
            return {
                "html": "<p>Comparison. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Comparison [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=68",
            };

        case "DABS":
            return {
                "html": "<p>Double-precision floating-point absolute value. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point absolute value [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=228",
            };

        case "DADD":
            return {
                "html": "<p>Double-precision floating-point addition without carry. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point addition without carry [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=229",
            };

        case "DCMPEQ":
            return {
                "html": "<p>Double-precision floating-point comparison (DCMPEQ). (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point comparison (DCMPEQ) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=231",
            };

        case "DCMPLE":
            return {
                "html": "<p>Double-precision floating-point comparison (DCMPLE). (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point comparison (DCMPLE) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=231",
            };

        case "DCMPLT":
            return {
                "html": "<p>Double-precision floating-point comparison (DCMPLT). (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point comparison (DCMPLT) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=231",
            };

        case "DCMPUN":
            return {
                "html": "<p>Double-precision floating-point comparison (DCMPUN). (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point comparison (DCMPUN) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=231",
            };

        case "DDIV":
            return {
                "html": "<p>Double-precision floating-point division. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point division [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=234",
            };

        case "DIV":
            return {
                "html": "<p>Signed division. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Signed division [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=69",
            };

        case "DIVU":
            return {
                "html": "<p>Unsigned division. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Unsigned division [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=71",
            };

        case "DMOV":
            return {
                "html": "<p>Double-precision floating-point transferring data. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point transferring data [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=236",
            };

        case "DMUL":
            return {
                "html": "<p>Double-precision floating-point multiplication. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point multiplication [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=238",
            };

        case "DNEG":
            return {
                "html": "<p>Double-precision floating-point negate. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point negate [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=240",
            };

        case "DPOPM":
            return {
                "html": "<p>Restoring multiple double-precision floating-point registers. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Restoring multiple double-precision floating-point registers [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=241",
            };

        case "DPUSHM":
            return {
                "html": "<p>Saving multiple double-precision floating-point registers. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Saving multiple double-precision floating-point registers [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=243",
            };

        case "DROUND":
            return {
                "html": "<p>Conversion from double-precision floating-point number to signed integer. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Conversion from double-precision floating-point number to signed integer [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=245",
            };

        case "DSQRT":
            return {
                "html": "<p>Double-precision floating-point square root. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point square root [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=248",
            };

        case "DSUB":
            return {
                "html": "<p>Double-precision floating-point subtraction. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point subtraction [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=250",
            };

        case "DTOF":
            return {
                "html": "<p>Double-precision floating-point number to single-precision floating-point number conversion. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point number to single-precision floating-point number conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=252",
            };

        case "DTOI":
            return {
                "html": "<p>Double-precision floating-point number to signed integer conversion. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point number to signed integer conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=255",
            };

        case "DTOU":
            return {
                "html": "<p>Double-precision floating-point number to unsigned integer conversion. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Double-precision floating-point number to unsigned integer conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=257",
            };

        case "EMACA":
            return {
                "html": "<p>Extended multiply-accumulate to the accumulator. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Extended multiply-accumulate to the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=80",
            };

        case "EMSBA":
            return {
                "html": "<p>Extended multiply-subtract to the accumulator. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Extended multiply-subtract to the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=81",
            };

        case "EMUL":
            return {
                "html": "<p>Signed multiplication. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Signed multiplication [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=73",
            };

        case "EMULA":
            return {
                "html": "<p>Extended multiply to the accumulator. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Extended multiply to the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=84",
            };

        case "EMULU":
            return {
                "html": "<p>Unsigned multiplication. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Unsigned multiplication [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=75",
            };

        case "FADD":
            return {
                "html": "<p>Floating-point addition. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Floating-point addition [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=77",
            };

        case "FCMP":
            return {
                "html": "<p>Floating-point comparison. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Floating-point comparison [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=79",
            };

        case "FDIV":
            return {
                "html": "<p>Floating-point division. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Floating-point division [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=82",
            };

        case "FMUL":
            return {
                "html": "<p>Floating-point multiplication. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Floating-point multiplication [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=84",
            };

        case "FSQRT":
            return {
                "html": "<p>Floating-point square root. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Floating-point square root [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=98",
            };

        case "FSUB":
            return {
                "html": "<p>Floating-point subtraction. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Floating-point subtraction [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=87",
            };

        case "FTOD":
            return {
                "html": "<p>Single-precision floating-point number to double-precision floating-point number conversion. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Single-precision floating-point number to double-precision floating-point number conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=259",
            };

        case "FTOI":
            return {
                "html": "<p>Floating point to integer conversion. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Floating point to integer conversion [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=90",
            };

        case "FTOU":
            return {
                "html": "<p>Floating point to unsigned integer conversion. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Floating point to unsigned integer conversion [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=106",
            };

        case "INT":
            return {
                "html": "<p>Software interrupt. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Software interrupt [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=93",
            };

        case "ITOD":
            return {
                "html": "<p>Signed integer to double-precision floating-point number conversion. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Signed integer to double-precision floating-point number conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=261",
            };

        case "ITOF":
            return {
                "html": "<p>Integer to floating-point conversion. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Integer to floating-point conversion [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=94",
            };

        case "JMP":
            return {
                "html": "<p>Unconditional jump. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Unconditional jump [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=96",
            };

        case "JSR":
            return {
                "html": "<p>Jump to a subroutine. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Jump to a subroutine [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=97",
            };

        case "MACHI":
            return {
                "html": "<p>Multiply-Accumulate the high-order word. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Multiply-Accumulate the high-order word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=98",
            };

        case "MACLO":
            return {
                "html": "<p>Multiply-Accumulate the low-order word. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Multiply-Accumulate the low-order word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=99",
            };

        case "MAX":
            return {
                "html": "<p>Selecting the highest value. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Selecting the highest value [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=100",
            };

        case "MIN":
            return {
                "html": "<p>Selecting the lowest value. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Selecting the lowest value [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=101",
            };

        case "MOV":
            return {
                "html": "<p>Transferring data. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Transferring data [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=102",
            };

        case "MOVCO":
            return {
                "html": "<p>Storing with LI flag clear. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Storing with LI flag clear [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=122",
            };

        case "MOVLI":
            return {
                "html": "<p>Loading with LI flag set. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Loading with LI flag set [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=123",
            };

        case "MOVU":
            return {
                "html": "<p>Transfer unsigned data. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Transfer unsigned data [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=105",
            };

        case "MSBHI":
            return {
                "html": "<p>Multiply-Subtract the higher-order word. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Multiply-Subtract the higher-order word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=126",
            };

        case "MSBLH":
            return {
                "html": "<p>Multiply-Subtract the lower-order word and higher-order word. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Multiply-Subtract the lower-order word and higher-order word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=127",
            };

        case "MSBLO":
            return {
                "html": "<p>Multiply-Subtract the lower-order word. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Multiply-Subtract the lower-order word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=128",
            };

        case "MUL":
            return {
                "html": "<p>Multiplication. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Multiplication [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=107",
            };

        case "MULHI":
            return {
                "html": "<p>Multiply the high-order word. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Multiply the high-order word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=109",
            };

        case "MULLH":
            return {
                "html": "<p>Multiply the lower-order word and higher-order word. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Multiply the lower-order word and higher-order word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=132",
            };

        case "MULLO":
            return {
                "html": "<p>Multiply the low-order word. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Multiply the low-order word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=110",
            };

        case "MVFACGU":
            return {
                "html": "<p>Move the guard longword from the accumulator. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Move the guard longword from the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=134",
            };

        case "MVFACHI":
            return {
                "html": "<p>Move the high-order longword from accumulator. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Move the high-order longword from accumulator [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=111",
            };

        case "MVFACLO":
            return {
                "html": "<p>Move the lower-order longword from the accumulator. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Move the lower-order longword from the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=136",
            };

        case "MVFACMI":
            return {
                "html": "<p>Move the middle-order longword from accumulator. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Move the middle-order longword from accumulator [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=112",
            };

        case "MVFC":
            return {
                "html": "<p>Transfer from a control register. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Transfer from a control register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=113",
            };

        case "MVFDC":
            return {
                "html": "<p>Transfer from double-precision floating-point control register. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Transfer from double-precision floating-point control register [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=262",
            };

        case "MVFDR":
            return {
                "html": "<p>Transfer from double-precision floating-point comparison result register. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Transfer from double-precision floating-point comparison result register [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=263",
            };

        case "MVTACGU":
            return {
                "html": "<p>Move the guard longword to the accumulator. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Move the guard longword to the accumulator [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=139",
            };

        case "MVTACHI":
            return {
                "html": "<p>Move the high-order longword to accumulator. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Move the high-order longword to accumulator [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=114",
            };

        case "MVTACLO":
            return {
                "html": "<p>Move the low-order longword to accumulator. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Move the low-order longword to accumulator [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=115",
            };

        case "MVTC":
            return {
                "html": "<p>Transfer to a control register. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Transfer to a control register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=116",
            };

        case "MVTDC":
            return {
                "html": "<p>Transfer to double-precision floating-point control register. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Transfer to double-precision floating-point control register [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=264",
            };

        case "MVTIPL":
            return {
                "html": "<p>Interrupt priority level setting (privileged instruction). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Interrupt priority level setting (privileged instruction) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=117",
            };

        case "NEG":
            return {
                "html": "<p>Two's complementation. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Two's complementation [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=118",
            };

        case "NOP":
            return {
                "html": "<p>No operation. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "No operation [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=119",
            };

        case "NOT":
            return {
                "html": "<p>Logical complementation. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Logical complementation [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=120",
            };

        case "OR":
            return {
                "html": "<p>Logical OR. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Logical OR [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=121",
            };

        case "POP":
            return {
                "html": "<p>Restoring data from stack to register. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Restoring data from stack to register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=123",
            };

        case "POPC":
            return {
                "html": "<p>Restoring a control register. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Restoring a control register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=124",
            };

        case "POPM":
            return {
                "html": "<p>Restoring multiple registers from the stack. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Restoring multiple registers from the stack [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=125",
            };

        case "PUSH":
            return {
                "html": "<p>Saving data on the stack. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Saving data on the stack [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=126",
            };

        case "PUSHC":
            return {
                "html": "<p>Saving a control register. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Saving a control register [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=127",
            };

        case "PUSHM":
            return {
                "html": "<p>Saving multiple registers. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Saving multiple registers [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=128",
            };

        case "RACL":
            return {
                "html": "<p>Round the accumulator longword. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Round the accumulator longword [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=155",
            };

        case "RACW":
            return {
                "html": "<p>Round the accumulator word. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Round the accumulator word [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=129",
            };

        case "RDACL":
            return {
                "html": "<p>Round the accumulator longword. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Round the accumulator longword [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=159",
            };

        case "RDACW":
            return {
                "html": "<p>Round the accumulator word. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Round the accumulator word [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=161",
            };

        case "REVL":
            return {
                "html": "<p>Endian conversion (longword). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Endian conversion (longword) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=131",
            };

        case "REVW":
            return {
                "html": "<p>Endian conversion (word). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Endian conversion (word) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=132",
            };

        case "RMPA":
            return {
                "html": "<p>Multiply-and-accumulate operation. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Multiply-and-accumulate operation [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=133",
            };

        case "ROLC":
            return {
                "html": "<p>Rotation with carry to left. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Rotation with carry to left [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=135",
            };

        case "RORC":
            return {
                "html": "<p>Rotation with carry to right. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Rotation with carry to right [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=136",
            };

        case "ROTL":
            return {
                "html": "<p>Rotation to left. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Rotation to left [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=137",
            };

        case "ROTR":
            return {
                "html": "<p>Rotation to right. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Rotation to right [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=138",
            };

        case "ROUND":
            return {
                "html": "<p>Conversion from floating-point to integer. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Conversion from floating-point to integer [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=139",
            };

        case "RSTR":
            return {
                "html": "<p>Collective restoration of register values (privileged instruction). (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Collective restoration of register values (privileged instruction) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=225",
            };

        case "RTE":
            return {
                "html": "<p>Return from the exception (privileged instruction). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Return from the exception (privileged instruction) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=142",
            };

        case "RTFI":
            return {
                "html": "<p>Return from the fast interrupt (privileged instruction). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Return from the fast interrupt (privileged instruction) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=143",
            };

        case "RTS":
            return {
                "html": "<p>Returning from a subroutine. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Returning from a subroutine [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=144",
            };

        case "RTSD":
            return {
                "html": "<p>Releasing stack frame and returning from subroutine. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Releasing stack frame and returning from subroutine [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=145",
            };

        case "SAT":
            return {
                "html": "<p>Saturation of signed 32-bit data. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Saturation of signed 32-bit data [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=147",
            };

        case "SATR":
            return {
                "html": "<p>Saturation of signed 64-bit data for RMPA. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Saturation of signed 64-bit data for RMPA [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=148",
            };

        case "SAVE":
            return {
                "html": "<p>Collective saving of register values (privileged instruction). (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Collective saving of register values (privileged instruction) [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=226",
            };

        case "SBB":
            return {
                "html": "<p>Subtraction with borrow. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Subtraction with borrow [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=149",
            };

        case "SCC":
            return {
                "html": "<p>Condition setting (SCC). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCEQ":
            return {
                "html": "<p>Condition setting (SCEQ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCEQ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCGE":
            return {
                "html": "<p>Condition setting (SCGE). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCGE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCGEU":
            return {
                "html": "<p>Condition setting (SCGEU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCGEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCGT":
            return {
                "html": "<p>Condition setting (SCGT). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCGT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCGTU":
            return {
                "html": "<p>Condition setting (SCGTU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCGTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCLE":
            return {
                "html": "<p>Condition setting (SCLE). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCLE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCLEU":
            return {
                "html": "<p>Condition setting (SCLEU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCLEU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCLT":
            return {
                "html": "<p>Condition setting (SCLT). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCLT) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCLTU":
            return {
                "html": "<p>Condition setting (SCLTU). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCLTU) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCMPU":
            return {
                "html": "<p>String comparison. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "String comparison [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=152",
            };

        case "SCN":
            return {
                "html": "<p>Condition setting (SCN). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCN) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCNC":
            return {
                "html": "<p>Condition setting (SCNC). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCNC) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCNE":
            return {
                "html": "<p>Condition setting (SCNE). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCNE) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCNO":
            return {
                "html": "<p>Condition setting (SCNO). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCNO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCNZ":
            return {
                "html": "<p>Condition setting (SCNZ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCNZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCO":
            return {
                "html": "<p>Condition setting (SCO). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCO) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCPZ":
            return {
                "html": "<p>Condition setting (SCPZ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCPZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SCZ":
            return {
                "html": "<p>Condition setting (SCZ). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Condition setting (SCZ) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=150",
            };

        case "SETPSW":
            return {
                "html": "<p>Setting a flag or bit in the PSW. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Setting a flag or bit in the PSW [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=153",
            };

        case "SHAR":
            return {
                "html": "<p>Arithmetic shift to the right. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Arithmetic shift to the right [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=154",
            };

        case "SHLL":
            return {
                "html": "<p>Logical and arithmetic shift to the left. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Logical and arithmetic shift to the left [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=155",
            };

        case "SHLR":
            return {
                "html": "<p>Logical shift to the right. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Logical shift to the right [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=156",
            };

        case "SMOVB":
            return {
                "html": "<p>Transferring a string backward. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Transferring a string backward [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=157",
            };

        case "SMOVF":
            return {
                "html": "<p>Transferring a string forward. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Transferring a string forward [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=158",
            };

        case "SMOVU":
            return {
                "html": "<p>Transferring a string. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Transferring a string [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=159",
            };

        case "SSTR":
            return {
                "html": "<p>Storing a string. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Storing a string [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=160",
            };

        case "STNZ":
            return {
                "html": "<p>Transfer with condition (on not zero). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Transfer with condition (on not zero) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=161",
            };

        case "STZ":
            return {
                "html": "<p>Transfer with condition (on zero). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Transfer with condition (on zero) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=162",
            };

        case "SUB":
            return {
                "html": "<p>Subtraction without borrow. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Subtraction without borrow [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=163",
            };

        case "SUNTIL":
            return {
                "html": "<p>Searching for a string (until match). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Searching for a string (until match) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=164",
            };

        case "SWHILE":
            return {
                "html": "<p>Searching for a string (while match). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Searching for a string (while match) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=166",
            };

        case "TST":
            return {
                "html": "<p>Logical test. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Logical test [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=168",
            };

        case "UTOD":
            return {
                "html": "<p>Unsigned integer to double-precision floating-point number conversion. (RX instruction, introduced in RXv3.)</p>",
                "tooltip": "Unsigned integer to double-precision floating-point number conversion [RXv3]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv3-instruction-set-architecture-users-manual-software-rev100#page=265",
            };

        case "UTOF":
            return {
                "html": "<p>Unsigned integer to floating-point conversion. (RX instruction, introduced in RXv2.)</p>",
                "tooltip": "Unsigned integer to floating-point conversion [RXv2]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-rxv2-instruction-set-architecture-users-manual-software#page=201",
            };

        case "WAIT":
            return {
                "html": "<p>Waiting (privileged instruction). (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Waiting (privileged instruction) [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=169",
            };

        case "XCHG":
            return {
                "html": "<p>Exchanging values. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Exchanging values [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=170",
            };

        case "XOR":
            return {
                "html": "<p>Logical exclusive or. (RX instruction, introduced in RXv1.)</p>",
                "tooltip": "Logical exclusive or [RXv1]",
                "url": "https://www.renesas.com/en/document/mas/rx-family-users-manual-software-rev120#page=172",
            };
    }
}
