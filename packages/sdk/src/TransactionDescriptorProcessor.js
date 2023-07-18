/**
 * Processes and looks up transaction descriptor properties.
 * @note This class is not intended to be used directly.
 */
export default class TransactionDescriptorProcessor {
	/**
	 * Creates a transaction descriptor processor.
	 * @param {object} transactionDescriptor Transaction descriptor.
	 * @param {Map<function, function>} typeParsingRules Type-dependent parsing rules.
	 * @param {function} typeConverter Converts a generated type to an sdk type (optional).
	 */
	constructor(transactionDescriptor, typeParsingRules, typeConverter = undefined) {
		/**
		 * @private
		 */
		this._transactionDescriptor = transactionDescriptor;

		/**
		 * @private
		 */
		this._typeParsingRules = typeParsingRules;

		/**
		 * Tries to coerce a value to a more appropriate type.
		 * @param {object} value Original value.
		 * @returns {object} Type converted value.
		 * @private
		 */
		this._typeConverter = typeConverter || (value => value);

		/**
		 * @private
		 */
		this._typeHints = {};
	}

	/**
	 * Looks up value and applies type hints.
	 * @param {string} key Key for which to retrieve value.
	 * @returns {object} Value corresponding to key.
	 * @private
	 */
	_lookupValueAndApplyTypeHints(key) {
		if (undefined === this._transactionDescriptor[key])
			throw RangeError(`transaction descriptor does not have attribute ${key}`);

		let value = this._transactionDescriptor[key];
		const typeHint = this._typeHints[key];
		if (this._typeParsingRules.has(typeHint))
			value = this._typeParsingRules.get(typeHint)(value);

		return value;
	}

	/**
	 * Looks up the value for key.
	 * @param {string} key Key for which to retrieve value.
	 * @returns {object} Value corresponding to key.
	 */
	lookupValue(key) {
		const value = this._lookupValueAndApplyTypeHints(key);
		return Array.isArray(value)
			? value.map(item => this._typeConverter(item))
			: this._typeConverter(value);
	}

	/**
	 * Copies all descriptor information to a transaction.
	 * @param {object} transaction Transaction to which to copy keys.
	 * @param {Array<string>} ignoreKeys Keys of descriptor values not to copy (optional).
	 */
	copyTo(transaction, ignoreKeys = undefined) {
		Object.getOwnPropertyNames(this._transactionDescriptor).forEach(key => {
			if (ignoreKeys && -1 !== ignoreKeys.indexOf(key))
				return;

			if (key.endsWith('Computed'))
				throw RangeError(`cannot explicitly set computed field ${key}`);

			if (undefined === transaction[key])
				throw RangeError(`transaction does not have attribute ${key}`);

			const value = this.lookupValue(key);
			transaction[key] = value;
		});
	}

	/**
	 * Sets type hints.
	 * @param {Map<string, string>} typeHints New type hints.
	 */
	setTypeHints(typeHints) {
		this._typeHints = typeHints || {};
	}
}
