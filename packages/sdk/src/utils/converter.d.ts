/**
 * Decodes two hex characters into a byte.
 * @param {string} char1 First hex digit.
 * @param {string} char2 Second hex digit.
 * @returns {number} Decoded byte.
 */
export function toByte(char1: string, char2: string): number;
/**
 * Determines whether or not a string is a hex string.
 * @param {string} input String to test.
 * @returns {boolean} \c true if the input is a hex string, \c false otherwise.
 */
export function isHexString(input: string): boolean;
/**
 * Converts a hex string to a uint8 array.
 * @param {string} input Hex encoded string.
 * @returns {Uint8Array} Uint8 array corresponding to the input.
 */
export function hexToUint8(input: string): Uint8Array;
/**
 * Converts a uint8 array to a hex string.
 * @param {Uint8Array} input Uint8 array.
 * @returns {string} Hex encoded string corresponding to the input.
 */
export function uint8ToHex(input: Uint8Array): string;
/**
 * Tries to parse a string representing an unsigned integer.
 * @param {string} str String to parse.
 * @returns {number} Number represented by the input or undefined.
 */
export function tryParseUint(str: string): number;
/**
 * Converts aligned bytes to little-endian number.
 * @param {Uint8Array} input Uint8 array.
 * @param {number} size Number of bytes.
 * @param {boolean} isSigned \c true if number should be treated as signed.
 * @returns {number|BigInt} Value corresponding to the input.
 */
export function bytesToInt(input: Uint8Array, size: number, isSigned?: boolean): number | BigInt;
/**
 * Converts bytes to little-endian number.
 * @param {Uint8Array} input Uint8 array.
 * @param {number} size Number of bytes.
 * @param {boolean} isSigned \c true if number should be treated as signed.
 * @returns {number|BigInt} Value corresponding to the input.
 */
export function bytesToIntUnaligned(input: Uint8Array, size: number, isSigned?: boolean): number | BigInt;
/**
 * Converts an integer to bytes.
 * @param {number} value Integer value.
 * @param {number} byteSize Number of output bytes.
 * @param {number} isSigned \c true if the value is signed.
 * @returns {Uint8Array} Byte representation of the integer.
 */
export function intToBytes(value: number, byteSize: number, isSigned?: number): Uint8Array;
