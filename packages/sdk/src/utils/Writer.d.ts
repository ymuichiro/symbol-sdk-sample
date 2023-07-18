/**
 * Position tracking writer.
 */
export default class Writer {
    /**
     * Creates a writer with specified size.
     * @param {number} size Allocated buffer size.
     */
    constructor(size: number);
    /**
     *  Underlying storage.
     * @type Uint8Array
     */
    storage: Uint8Array;
    /**
     * Current offset.
     * @type number
     */
    offset: number;
    /**
     * Writes array into buffer.
     * @param {Array<number>} buffer Data to write.
     */
    write(buffer: Array<number>): void;
}
