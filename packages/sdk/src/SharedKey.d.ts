/**
 * Creates a shared secret factory given a hash function.
 * @param {function} cryptoHash Hash function to use.
 * @returns {function(Uint8Array, PublicKey): Uint8Array} Creates a shared secret from a raw private key and public key.
 */
export function deriveSharedSecretFactory(cryptoHash: Function): (arg0: Uint8Array, arg1: PublicKey) => Uint8Array;
/**
 * Creates a shared key factory given a tag and a hash function.
 * @param {string} info Tag used in HKDF algorithm.
 * @param {function} cryptoHash Hash function to use.
 * @returns {function(Uint8Array, PublicKey): SharedKey256} Creates a shared key from a raw private key and public key.
 */
export function deriveSharedKeyFactory(info: string, cryptoHash: Function): (arg0: Uint8Array, arg1: PublicKey) => SharedKey256;
import { PublicKey } from './CryptoTypes.js';
import { SharedKey256 } from './CryptoTypes.js';
