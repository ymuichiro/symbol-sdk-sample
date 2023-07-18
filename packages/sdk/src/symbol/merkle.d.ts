/**
 * Path in a Patricia merkle treee.
 * @class
 * @typedef {object} PatriciaTreePath
 * @property {Uint8Array} path Bytes composing the full path.
 * @property {number} size Length (in nibbles) of the path.
 */
/**
 * Represents part of a merkle tree proof.
 * @class
 * @typedef {object} MerklePart
 * @property {Hash256} hash Hash at this node.
 * @property {boolean} isLeft \c true if this is a left node; right otherwise.
 */
/**
 * Builder for creating a merkle hash.
 */
export class MerkleHashBuilder {
    /**
     * @private
     */
    private _hashes;
    /**
     * Adds a hash to the merkle hash.
     * @param {Hash256} componentHash Hash to add.
     */
    update(componentHash: Hash256): void;
    /**
     * Calculates the merkle hash.
     * @returns {Hash256} Merkle hash.
     */
    final(): Hash256;
}
export function proveMerkle(leafHash: Hash256, merklePath: Array<MerklePart>, rootHash: Hash256): boolean;
export function deserializePatriciaTreeNodes(buffer: Uint8Array): Array<TreeNode>;
/**
 * Possible results of a patricia merkle proof.
 */
export class PatriciaMerkleProofResult {
    /**
     * Proof is valid (positive).
     * @type number
     */
    static VALID_POSITIVE: number;
    /**
     * Proof is valid (negative).
     * @type number
     */
    static VALID_NEGATIVE: number;
    /**
     * Negative proof is inconclusive.
     * @type number
     */
    static INCONCLUSIVE: number;
    /**
     * State hash cannot be derived from subcache merkle roots.
     * @type number
     */
    static STATE_HASH_DOES_NOT_MATCH_ROOTS: number;
    /**
     * Root of the path tree being proven is not a subcache merkle root.
     * @type number
     */
    static UNANCHORED_PATH_TREE: number;
    /**
     * Leaf value does not match expected value.
     * @type number
     */
    static LEAF_VALUE_MISMATCH: number;
    /**
     * Provided merkle hash contains an unlinked node.
     * @type number
     */
    static UNLINKED_NODE: number;
    /**
     * Actual merkle path does not match encoded key.
     * @type number
     */
    static PATH_MISMATCH: number;
}
export function provePatriciaMerkle(encodedKey: Hash256, valueToTest: Hash256, merklePath: Array<TreeNode>, stateHash: Hash256, subcacheMerkleRoots: Hash256): number;
/**
 * Path in a Patricia merkle treee.
 */
export type PatriciaTreePath = {
    /**
     * Bytes composing the full path.
     */
    path: Uint8Array;
    /**
     * Length (in nibbles) of the path.
     */
    size: number;
};
/**
 * Represents part of a merkle tree proof.
 */
export type MerklePart = {
    /**
     * Hash at this node.
     */
    hash: Hash256;
    /**
     * \c true if this is a left node; right otherwise.
     */
    isLeft: boolean;
};
import { Hash256 } from '../CryptoTypes.js';
/**
 *  Node in a compact Patricia tree.
 */
declare class TreeNode {
    /**
     * Creates a tree node.
     * @param {PatriciaTreePath} path Node path.
     */
    constructor(path: PatriciaTreePath);
    /**
     * Node path.
     * @type PatriciaTreePath
     */
    path: PatriciaTreePath;
    /**
     * Gets hex representation of path.
     * @returns {string} Hex representation of path.
     */
    get hexPath(): string;
}
export {};
