/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Addresses
 */
export interface Addresses {
    /**
     * Array of addresses.
     * @type {Array<string>}
     * @memberof Addresses
     */
    addresses?: Array<string>;
}

/**
 * Check if a given object implements the Addresses interface.
 */
export function instanceOfAddresses(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressesFromJSON(json: any): Addresses {
    return AddressesFromJSONTyped(json, false);
}

export function AddressesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Addresses {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addresses': !exists(json, 'addresses') ? undefined : json['addresses'],
    };
}

export function AddressesToJSON(value?: Addresses | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addresses': value.addresses,
    };
}

