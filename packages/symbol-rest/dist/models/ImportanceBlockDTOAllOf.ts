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
 * @interface ImportanceBlockDTOAllOf
 */
export interface ImportanceBlockDTOAllOf {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof ImportanceBlockDTOAllOf
     */
    votingEligibleAccountsCount: number;
    /**
     * A number that allows uint 64 values represented with a string.
     * @type {string}
     * @memberof ImportanceBlockDTOAllOf
     */
    harvestingEligibleAccountsCount: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ImportanceBlockDTOAllOf
     */
    totalVotingBalance: string;
    /**
     * 
     * @type {string}
     * @memberof ImportanceBlockDTOAllOf
     */
    previousImportanceBlockHash: string;
}

/**
 * Check if a given object implements the ImportanceBlockDTOAllOf interface.
 */
export function instanceOfImportanceBlockDTOAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "votingEligibleAccountsCount" in value;
    isInstance = isInstance && "harvestingEligibleAccountsCount" in value;
    isInstance = isInstance && "totalVotingBalance" in value;
    isInstance = isInstance && "previousImportanceBlockHash" in value;

    return isInstance;
}

export function ImportanceBlockDTOAllOfFromJSON(json: any): ImportanceBlockDTOAllOf {
    return ImportanceBlockDTOAllOfFromJSONTyped(json, false);
}

export function ImportanceBlockDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportanceBlockDTOAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'votingEligibleAccountsCount': json['votingEligibleAccountsCount'],
        'harvestingEligibleAccountsCount': json['harvestingEligibleAccountsCount'],
        'totalVotingBalance': json['totalVotingBalance'],
        'previousImportanceBlockHash': json['previousImportanceBlockHash'],
    };
}

export function ImportanceBlockDTOAllOfToJSON(value?: ImportanceBlockDTOAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'votingEligibleAccountsCount': value.votingEligibleAccountsCount,
        'harvestingEligibleAccountsCount': value.harvestingEligibleAccountsCount,
        'totalVotingBalance': value.totalVotingBalance,
        'previousImportanceBlockHash': value.previousImportanceBlockHash,
    };
}
