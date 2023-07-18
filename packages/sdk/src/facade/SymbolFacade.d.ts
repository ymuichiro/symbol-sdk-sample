/**
 * Facade used to interact with Symbol blockchain.
 */
export default class SymbolFacade {
    /**
     * BIP32 curve name.
     * @type {string}
     */
    static BIP32_CURVE_NAME: string;
    /**
     * Network address class type.
     * @type {typeof Address}
     */
    static Address: typeof Address;
    /**
     * Network key pair class type.
     * @type {typeof KeyPair}
     */
    static KeyPair: typeof KeyPair;
    /**
     * Network verifier class type.
     * @type {typeof Verifier}
     */
    static Verifier: typeof Verifier;
    /**
     * Derives shared key from key pair and other party's public key.
     * @param {KeyPair} keyPair Key pair.
     * @param {PublicKey} otherPublicKey Other party's public key.
     * @returns {SharedKey256} Shared encryption key.
     */
    static deriveSharedKey: (keyPair: KeyPair, otherPublicKey: PublicKey) => SharedKey256;
    /**
     * Hashes embedded transactions of an aggregate transaction.
     * @param {Array<sc.EmbeddedTransaction>} embeddedTransactions Embedded transactions to hash.
     * @returns {Hash256} Aggregate transactions hash.
     */
    static hashEmbeddedTransactions(embeddedTransactions: Array<sc.EmbeddedTransaction>): Hash256;
    /**
     * Derives a Symbol KeyPair from a BIP32 node.
     * @param {Bip32Node} bip32Node BIP32 node.
     * @returns {KeyPair} Derived key pair.
     */
    static bip32NodeToKeyPair(bip32Node: Bip32Node): KeyPair;
    /**
     * Creates a Symbol facade.
     * @param {string|SymbolNetwork} network Symbol network or network name.
     */
    constructor(network: string | SymbolNetwork);
    /**
     * Underlying network.
     * @type SymbolNetwork
     */
    network: SymbolNetwork;
    /**
     * Underlying transaction factory.
     * @type TransactionFactory
     */
    transactionFactory: TransactionFactory;
    /**
     * Hashes a Symbol transaction.
     * @param {sc.Transaction} transaction Transaction object.
     * @returns {Hash256} Transaction hash.
     */
    hashTransaction(transaction: sc.Transaction): Hash256;
    /**
     * Signs a Symbol transaction.
     * @param {KeyPair} keyPair Key pair.
     * @param {sc.Transaction} transaction Transaction object.
     * @returns {Signature} Transaction signature.
     */
    signTransaction(keyPair: KeyPair, transaction: sc.Transaction): Signature;
    /**
     * Verifies a Symbol transaction.
     * @param {sc.Transaction} transaction Transaction object.
     * @param {Signature} signature Signature to verify.
     * @returns {boolean} \c true if transaction signature is verified.
     */
    verifyTransaction(transaction: sc.Transaction, signature: Signature): boolean;
    /**
     * Cosigns a Symbol transaction.
     * @param {KeyPair} keyPair Key pair of the cosignatory.
     * @param {sc.Transaction} transaction Transaction object.
     * @param {boolean} detached \c true if resulting cosignature is appropriate for network propagation.
     *                           \c false if resulting cosignature is appropriate for attaching to an aggregate.
     * @returns {sc.Cosignature|sc.DetachedCosignature} Signed cosignature.
     */
    cosignTransaction(keyPair: KeyPair, transaction: sc.Transaction, detached?: boolean): sc.Cosignature | sc.DetachedCosignature;
    /**
     * Creates a network compatible BIP32 path for the specified account.
     *
     * @param {number} accountId Id of the account for which to generate a BIP32 path.
     * @returns {Array<number>} BIP32 path for the specified account.
     */
    bip32Path(accountId: number): Array<number>;
}
import { Network as SymbolNetwork } from '../symbol/Network.js';
import TransactionFactory from '../symbol/TransactionFactory.js';
import * as sc from '../symbol/models.js';
import { Hash256 } from '../CryptoTypes.js';
import { KeyPair } from '../symbol/KeyPair.js';
import { Signature } from '../CryptoTypes.js';
import { Address } from '../symbol/Network.js';
import { Verifier } from '../symbol/KeyPair.js';
import { PublicKey } from '../CryptoTypes.js';
import { SharedKey256 } from '../CryptoTypes.js';
import { Bip32Node } from '../Bip32.js';
