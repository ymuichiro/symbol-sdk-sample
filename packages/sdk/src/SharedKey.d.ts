export function deriveSharedSecretFactory(cryptoHash: Function): (arg0: Uint8Array, arg1: PublicKey) => Uint8Array;
export function deriveSharedKeyFactory(info: string, cryptoHash: Function): (arg0: Uint8Array, arg1: PublicKey) => SharedKey256;
import { PublicKey } from './CryptoTypes.js';
import { SharedKey256 } from './CryptoTypes.js';
