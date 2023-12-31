/**
 * Represents a network.
 * @template Address
 * @template NetworkTimestamp
 */
export class Network<Address, NetworkTimestamp> {
    /**
     * Creates a new network with the specified name and identifier byte.
     * @param {string} name Network name.
     * @param {number} identifier Network identifier byte.
     * @param {NetworkTimestampDatetimeConverter} datetimeConverter Network timestamp datetime converter associated with this network.
     * @param {function} addressHasher Gets the primary hasher to use in the public key to address conversion.
     * @param {function} createAddress Creates an encoded address from an address without checksum and checksum bytes.
     * @param {function} AddressClass Address class associated with this network.
     * @param {function} NetworkTimestampClass Network timestamp class associated with this network.
     */
    constructor(name: string, identifier: number, datetimeConverter: NetworkTimestampDatetimeConverter, addressHasher: Function, createAddress: Function, AddressClass: Function, NetworkTimestampClass: Function);
    /**
     * Network name.
     * @type string
     */
    name: string;
    /**
     * Network identifier byte.
     * @type number
     */
    identifier: number;
    /**
     * Network timestamp datetime converter associated with this network.
     * @type NetworkTimestampDatetimeConverter
     */
    datetimeConverter: NetworkTimestampDatetimeConverter;
    /**
     * @private
     */
    private _addressHasher;
    /**
     * @private
     */
    private _createAddress;
    /**
     * @private
     */
    private _AddressClass;
    /**
     * @private
     */
    private _NetworkTimestampClass;
    /**
     * Converts a public key to an address.
     * @param {PublicKey} publicKey Public key to convert.
     * @returns {Address} Address corresponding to the public key input.
     */
    publicKeyToAddress(publicKey: PublicKey): Address;
    /**
     * Checks if an address string is valid and belongs to this network.
     * @param {string} addressString Address to check.
     * @returns {boolean} \c true if address is valid and belongs to this network.
     */
    isValidAddressString(addressString: string): boolean;
    /**
     * Checks if an address is valid and belongs to this network.
     * @param {Address} address Address to check.
     * @returns {boolean} \c true if address is valid and belongs to this network.
     */
    isValidAddress(address: Address): boolean;
    /**
     * Converts a network timestamp to a datetime.
     * @param {NetworkTimestamp} referenceNetworkTimestamp Reference network timestamp to convert.
     * @returns {Date} Datetime representation of the reference network timestamp.
     */
    toDatetime(referenceNetworkTimestamp: NetworkTimestamp): Date;
    /**
     * Converts a datetime to a network timestamp.
     * @param {Date} referenceDatetime Reference datetime to convert.
     * @returns {NetworkTimestamp} Network timestamp representation of the reference datetime.
     */
    fromDatetime(referenceDatetime: Date): NetworkTimestamp;
    /**
     * Returns string representation of this object.
     * @returns {string} String representation of this object
     */
    toString(): string;
}
/**
 * Provides utility functions for finding a network.
 */
export class NetworkLocator {
    /**
     * Finds a network with a specified name within a list of networks.
     * @template Address
     * @template NetworkTimestamp
     * @param {Array<Network<Address, NetworkTimestamp>>} networks List of networks to search.
     * @param {Array<string>|string} singleOrMultipleNames Names for which to search.
     * @returns {Network<Address, NetworkTimestamp>} First network with a name in the supplied list.
     */
    static findByName<Address, NetworkTimestamp>(networks: Network<Address, NetworkTimestamp>[], singleOrMultipleNames: Array<string> | string): Network<Address, NetworkTimestamp>;
    /**
     * Finds a network with a specified identifier within a list of networks.
     * @template Address
     * @template NetworkTimestamp
     * @param {Array<Network<Address, NetworkTimestamp>>} networks List of networks to search.
     * @param {Array<number>|number} singleOrMultipleIdentifiers Identifiers for which to search.
     * @returns {Network<Address, NetworkTimestamp>} First network with an identifier in the supplied list.
     */
    static findByIdentifier<Address_1, NetworkTimestamp_1>(networks: Network<Address_1, NetworkTimestamp_1>[], singleOrMultipleIdentifiers: Array<number> | number): Network<Address_1, NetworkTimestamp_1>;
}
import { NetworkTimestampDatetimeConverter } from './NetworkTimestamp.js';
import { PublicKey } from './CryptoTypes.js';
