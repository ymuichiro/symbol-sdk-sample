/**
 * Facade used to interact with NEM blockchain.
 */
export default class NemFacade {
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
     * Derives a NEM KeyPair from a BIP32 node.
     * @param {Bip32Node} bip32Node BIP32 node.
     * @returns {KeyPair} Derived key pair.
     */
    static bip32NodeToKeyPair(bip32Node: Bip32Node): KeyPair;
    /**
     * Creates a NEM facade.
     * @param {string|NemNetwork} network NEM network or network name.
     */
    constructor(network: string | NemNetwork);
    /**
     * Underlying network.
     * @type NemNetwork
     */
    network: NemNetwork;
    /**
     * Underlying transaction factory.
     * @type TransactionFactory
     */
    transactionFactory: TransactionFactory;
    /**
     * Hashes a NEM transaction.
     * @param {nc.Transaction} transaction Transaction object.
     * @returns {Hash256} Transaction hash.
     */
    hashTransaction(transaction: nc.Transaction): Hash256;
    /**
     * Signs a NEM transaction.
     * @param {KeyPair} keyPair Key pair.
     * @param {nc.Transaction} transaction Transaction object.
     * @returns {Signature} Transaction signature.
     */
    signTransaction(keyPair: KeyPair, transaction: nc.Transaction): Signature;
    /**
     * Verifies a NEM transaction.
     * @param {nc.Transaction} transaction Transaction object.
     * @param {Signature} signature Signature to verify.
     * @returns {boolean} \c true if transaction signature is verified.
     */
    verifyTransaction(transaction: nc.Transaction, signature: Signature): boolean;
    /**
     * Creates a network compatible BIP32 path for the specified account.
     *
     * @param {number} accountId Id of the account for which to generate a BIP32 path.
     * @returns {Array<number>} BIP32 path for the specified account.
     */
    bip32Path(accountId: number): Array<number>;
}
import { Network as NemNetwork } from '../nem/Network.js';
import TransactionFactory from '../nem/TransactionFactory.js';
import * as nc from '../symbol/models.js';
import { Hash256 } from '../CryptoTypes.js';
import { KeyPair } from '../nem/KeyPair.js';
import { Signature } from '../CryptoTypes.js';
import { Address } from '../nem/Network.js';
import { Verifier } from '../nem/KeyPair.js';
import { PublicKey } from '../CryptoTypes.js';
import { SharedKey256 } from '../CryptoTypes.js';
import { Bip32Node } from '../Bip32.js';
