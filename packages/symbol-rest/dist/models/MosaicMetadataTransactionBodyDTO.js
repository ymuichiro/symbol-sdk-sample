export function instanceOfMosaicMetadataTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "scopedMetadataKey" in value;
    isInstance = isInstance && "targetMosaicId" in value;
    isInstance = isInstance && "valueSizeDelta" in value;
    isInstance = isInstance && "valueSize" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
export function MosaicMetadataTransactionBodyDTOFromJSON(json) {
    return MosaicMetadataTransactionBodyDTOFromJSONTyped(json, false);
}
export function MosaicMetadataTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'targetMosaicId': json['targetMosaicId'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
    };
}
export function MosaicMetadataTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'targetMosaicId': value.targetMosaicId,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
    };
}
