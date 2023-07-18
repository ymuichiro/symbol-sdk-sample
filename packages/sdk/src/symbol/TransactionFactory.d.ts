/**
 * Factory for creating Symbol transactions.
 */
export default class TransactionFactory {
    /**
     * Attaches a signature to a transaction.
     * @param {sc.Transaction} transaction Transaction object.
     * @param {Signature} signature Signature to attach.
     * @returns {string} JSON transaction payload.
     */
    static attachSignature(transaction: sc.Transaction, signature: Signature): string;
    /**
     * Tries to coerce an sdk type to a model type.
     * @param {object} value Value to convert.
     * @returns {sc.Address|undefined} Converted value or undefined.
     * @private
     */
    private static _symbolTypeConverter;
    /**
     * Builds a rule based transaction factory.
     * @param {Map<function, function>} typeRuleOverrides Type rule overrides.
     * @returns {RuleBasedTransactionFactory} Rule based transaction factory.
     * @private
     */
    private static _buildRules;
    /**
     * Creates a factory for the specified network.
     * @param {Network} network Symbol network.
     * @param {Map<function, function>} typeRuleOverrides Type rule overrides.
     */
    constructor(network: Network, typeRuleOverrides: Map<Function, Function>);
    /**
     * @private
     */
    private _factory;
    /**
     * @private
     */
    private _network;
    /**
     * Creates a transaction from a transaction descriptor.
     * @param {object} transactionDescriptor Transaction descriptor.
     * @param {boolean} autosort When set (default), descriptor arrays requiring ordering will be automatically sorted.
     *                           When unset, descriptor arrays will be presumed to be already sorted.
     * @param {function} FactoryClass Factory class used to create the transaction.
     * @returns {sc.Transaction|sc.EmbeddedTransaction} Newly created transaction.
     * @private
     */
    private _createAndExtend;
    /**
     * Creates a transaction from a transaction descriptor.
     * @param {object} transactionDescriptor Transaction descriptor.
     * @param {boolean} autosort When set (default), descriptor arrays requiring ordering will be automatically sorted.
     *                           When unset, descriptor arrays will be presumed to be already sorted.
     * @returns {sc.Transaction} Newly created transaction.
     */
    create(transactionDescriptor: object, autosort?: boolean): sc.Transaction;
    /**
     * Creates an embedded transaction from a transaction descriptor.
     * @param {object} transactionDescriptor Transaction descriptor.
     * @param {boolean} autosort When set (default), descriptor arrays requiring ordering will be automatically sorted.
     *                           When unset, descriptor arrays will be presumed to be already sorted.
     * @returns {sc.EmbeddedTransaction} Newly created transaction.
     */
    createEmbedded(transactionDescriptor: object, autosort?: boolean): sc.EmbeddedTransaction;
}
import * as sc from './models.js';
import { Signature } from '../CryptoTypes.js';
import { Network } from './Network.js';
