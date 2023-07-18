/**
 * Represents a fixed size byte array.
 */
export default class ByteArray {
    /**
     * Creates a byte array.
     * @param {number} fixedSize Size of the array.
     * @param {Uint8Array|string} arrayInput Byte array or hex string.
     */
    constructor(fixedSize: number, arrayInput: Uint8Array | string);
    /**
     * Underlying bytes.
     * @type Uint8Array
     */
    bytes: Uint8Array;
    /**
     * Returns string representation of this object.
     * @returns {string} String representation of this object
     */
    toString(): string;
}
