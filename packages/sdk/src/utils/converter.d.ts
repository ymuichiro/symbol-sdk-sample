export function toByte(char1: string, char2: string): number;
export function isHexString(input: string): boolean;
export function hexToUint8(input: string): Uint8Array;
export function uint8ToHex(input: Uint8Array): string;
export function tryParseUint(str: string): number;
export function bytesToInt(input: Uint8Array, size: number, isSigned?: boolean): number | BigInt;
export function bytesToIntUnaligned(input: Uint8Array, size: number, isSigned?: boolean): number | BigInt;
export function intToBytes(value: number, byteSize: number, isSigned?: number): Uint8Array;
