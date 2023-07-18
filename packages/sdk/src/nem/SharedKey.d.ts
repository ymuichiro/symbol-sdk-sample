export function deriveSharedKey(keyPair: KeyPair, otherPublicKey: PublicKey): SharedKey256;
export function deriveSharedKeyDeprecated(keyPair: KeyPair, otherPublicKey: PublicKey, salt: Uint8Array): SharedKey256;
import { KeyPair } from './KeyPair.js';
import { PublicKey } from '../CryptoTypes.js';
import { SharedKey256 } from '../CryptoTypes.js';
