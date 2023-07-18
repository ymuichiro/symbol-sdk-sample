/**
 * Generates symbol voting keys.
 */
export default class VotingKeysGenerator {
    /**
     * Creates a generator around a voting root key pair.
     * @param {KeyPair} rootKeyPair Voting root key pair.
     * @param {function} privateKeyGenerator Private key generator.
     */
    constructor(rootKeyPair: KeyPair, privateKeyGenerator?: Function);
    /**
     * @private
     */
    private _rootKeyPair;
    /**
     * @private
     */
    private _privateKeyGenerator;
    /**
     * Generates voting keys for specified epochs.
     * @param {number} startEpoch Start epoch.
     * @param {number} endEpoch End epoch.
     * @returns {Uint8Array} Serialized voting keys.
     */
    generate(startEpoch: number, endEpoch: number): Uint8Array;
}
import { KeyPair } from './KeyPair.js';
