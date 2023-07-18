export function generateMosaicId(ownerAddress: Address, nonce: number): BigInt;
export function generateNamespaceId(name: string, parentNamespaceId?: BigInt): BigInt;
export function isValidNamespaceName(name: string): boolean;
export function generateNamespacePath(fullyQualifiedName: string): Array<BigInt>;
export function generateMosaicAliasId(fullyQualifiedName: string): BigInt;
import { Address } from './Network.js';
