/**
 * Represents a base integer.
 */
export default class BaseValue {
    /**
     * Creates a base value.
     * @param {number} size Size of the integer.
     * @param {number|BigInt} value Value.
     * @param {boolean} isSigned \c true if the value should be treated as signed.
     */
    constructor(size: number, value: number | BigInt, isSigned?: boolean);
    /**
     * Size of the integer.
     * @type number
     */
    size: number;
    /**
     * \c true if the value should be treated as signed.
     * @type boolean
     */
    isSigned: boolean;
    /**
     * Value.
     * @type number|BigInt
     */
    value: number | BigInt;
    /**
     * Converts base value to string.
     * @returns {string} String representation.
     */
    toString(): string;
}
