import RuleBasedTransactionFactory from '../src/RuleBasedTransactionFactory.js';
import { Address } from '../src/symbol/Network.js';
import * as sc from '../src/symbol/models.js';

/**
 * Factory for creating Symbol receipts.
 */
export default class ReceiptFactory {
	/**
	 * Creates a factory.
	 * @param {Map} typeRuleOverrides Type rule overrides.
	 */
	constructor(typeRuleOverrides) {
		this.factory = ReceiptFactory.buildRules(typeRuleOverrides);
	}

	/**
	 * Creates a receipt from a receipt descriptor.
	 * @param {object} receiptDescriptor Receipt descriptor.
	 * @returns {object} Newly created receipt.
	 */
	create(receiptDescriptor) {
		return this.factory.createFromFactory(sc.ReceiptFactory.createByName, receiptDescriptor);
	}

	static buildRules(typeRuleOverrides) {
		const factory = new RuleBasedTransactionFactory(sc, undefined, typeRuleOverrides);
		factory.autodetect();

		factory.addStructParser('Mosaic');

		const sdkTypeMapping = {
			Address
		};
		Object.keys(sdkTypeMapping).forEach(name => { factory.addPodParser(name, sdkTypeMapping[name]); });

		return factory;
	}
}
