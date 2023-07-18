/**
 * Buffer view.
 */
export default class BufferView {
    /**
     * Creates buffer view around buffer.
     * @param {Uint8Array} buffer Initial buffer view.
     */
    constructor(buffer: Uint8Array);
    buffer: Uint8Array;
    /**
     * Moves view right.
     * @param {number} size Amount of bytes to shift.
     */
    shiftRight(size: number): void;
    /**
     * Returns new limited view.
     * @param {number} size Length in bytes.
     * @returns {Uint8Array} View limited to specified size.
     */
    window(size: number): Uint8Array;
    /**
     * Shrinks view to specified size
     * @param {number} size New length in bytes.
     */
    shrink(size: number): void;
}
