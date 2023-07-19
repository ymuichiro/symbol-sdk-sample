/**
 * Generates a mosaic id from an owner address and a nonce.
 * @param {Address} ownerAddress Owner address.
 * @param {number} nonce Nonce.
 * @returns {BigInt} Computed mosaic id.
 */
export function generateMosaicId(ownerAddress: Address, nonce: number): BigInt;
/**
 * Generates a namespace id from a name and an optional parent namespace id.
 * @param {string} name Namespace name.
 * @param {BigInt} parentNamespaceId Parent namespace id.
 * @returns {BigInt} Computed namespace id.
 */
export function generateNamespaceId(name: string, parentNamespaceId?: BigInt): BigInt;
/**
 * Returns true if a name is a valid namespace name.
 * @param {string} name Namespace name to check.
 * @returns {boolean} true if the specified name is valid.
 */
export function isValidNamespaceName(name: string): boolean;
/**
 * Parses a fully qualified namespace name into a path.
 * @param {string} fullyQualifiedName Fully qualified namespace name.
 * @returns {Array<BigInt>} Computed namespace path.
 */
export function generateNamespacePath(fullyQualifiedName: string): Array<BigInt>;
/**
 * Generates a mosaic id from a fully qualified mosaic alias name.
 * @param {string} fullyQualifiedName Fully qualified mosaic name.
 * @returns {BigInt} Computed mosaic id.
 */
export function generateMosaicAliasId(fullyQualifiedName: string): BigInt;
import { Address } from './Network.js';
