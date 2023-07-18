/**
 * Represents a Symbol network timestamp with millisecond resolution.
 */
export class NetworkTimestamp extends BasicNetworkTimestamp {
    /**
     * Adds a specified number of milliseconds to this timestamp.
     * @param {number} count Number of milliseconds to add.
     * @returns {NetworkTimestamp} New timestamp that is the specified number of milliseconds past this timestamp.
     */
    addMilliseconds(count: number): NetworkTimestamp;
    /**
     * Adds a specified number of seconds to this timestamp.
     * @override
     * @param {number} count Number of seconds to add.
     * @returns {NetworkTimestamp} New timestamp that is the specified number of seconds past this timestamp.
     */
    override addSeconds(count: number): NetworkTimestamp;
}
/**
 * Represents a Symbol address.
 */
export class Address extends ByteArray {
    /**
     * Byte size of raw address.
     * @type number
     */
    static SIZE: number;
    /**
     * Length of encoded address string.
     * @type number
     */
    static ENCODED_SIZE: number;
    /**
     * Creates a Symbol address.
     * @param {Uint8Array|string|Address} address Input string, byte array or address.
     */
    constructor(address: Uint8Array | string | Address);
}
/**
 * Represents a Symbol network.
 */
export class Network extends BasicNetwork<any, any> {
    /**
     * Symbol main network.
     * @type Network
     */
    static MAINNET: Network;
    /**
     * Symbol test network.
     * @type Network
     */
    static TESTNET: Network;
    /**
     * Symbol well known networks.
     * @type Array<Network>
     */
    static NETWORKS: Array<Network>;
    /**
     * Creates a new network with the specified name, identifier byte and generation hash seed.
     * @param {string} name Network name.
     * @param {number} identifier Network identifier byte.
     * @param {Date} epochTime Network epoch time.
     * @param {Hash256} generationHashSeed Network generation hash seed.
     */
    constructor(name: string, identifier: number, epochTime: Date, generationHashSeed?: Hash256);
    generationHashSeed: Hash256;
}
import { NetworkTimestamp as BasicNetworkTimestamp } from '../NetworkTimestamp.js';
import ByteArray from '../ByteArray.js';
import { Network as BasicNetwork } from '../Network.js';
import { Hash256 } from '../CryptoTypes.js';
