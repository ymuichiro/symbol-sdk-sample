/**
 * Position tracking writer.
 */
export default class Writer {
	/**
	 * Creates a writer with specified size.
	 * @param {number} size Allocated buffer size.
	 */
	constructor(size) {
		this.storage = new Uint8Array(size);
		this.offset = 0;
	}

	/**
	 * Writes array into buffer.
	 * @param {Array<byte>} buffer Data to write.
	 */
	write(buffer) {
		this.storage.set(buffer, this.offset);
		this.offset += buffer.length;
	}
}
