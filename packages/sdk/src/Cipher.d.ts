/**
 * Performs AES CBC encryption and decryption with a given key.
 */
export class AesCbcCipher {
    /**
     * Creates a cipher around an aes shared key.
     * @param {SharedKey256} aesKey AES shared key.
     */
    constructor(aesKey: SharedKey256);
    /**
     * @private
     */
    private _key;
    /**
     * Encrypts clear text.
     * @param {Uint8Array} clearText Clear text to encrypt.
     * @param {Uint8Array} iv IV bytes.
     * @returns {Uint8Array} Cipher text.
     */
    encrypt(clearText: Uint8Array, iv: Uint8Array): Uint8Array;
    /**
     * Decrypts cipher text.
     * @param {Uint8Array} cipherText Cipher text to decrypt.
     * @param {Uint8Array} iv IV bytes.
     * @returns {Uint8Array} Clear text.
     */
    decrypt(cipherText: Uint8Array, iv: Uint8Array): Uint8Array;
}
/**
 * Performs AES GCM encryption and decryption with a given key.
 */
export class AesGcmCipher {
    /**
     * Byte size of GCM tag.
     * @type number
     */
    static TAG_SIZE: number;
    /**
     * Creates a cipher around an aes shared key.
     * @param {SharedKey256} aesKey AES shared key.
     */
    constructor(aesKey: SharedKey256);
    /**
     * @private
     */
    private _key;
    /**
     * Encrypts clear text and appends tag to encrypted payload.
     * @param {Uint8Array} clearText Clear text to encrypt.
     * @param {Uint8Array} iv IV bytes.
     * @returns {Uint8Array} Cipher text with appended tag.
     */
    encrypt(clearText: Uint8Array, iv: Uint8Array): Uint8Array;
    /**
     * Decrypts cipher text with appended tag.
     * @param {Uint8Array} cipherText Cipher text with appended tag to decrypt.
     * @param {Uint8Array} iv IV bytes.
     * @returns {Uint8Array} Clear text.
     */
    decrypt(cipherText: Uint8Array, iv: Uint8Array): Uint8Array;
}
import { SharedKey256 } from './CryptoTypes.js';
