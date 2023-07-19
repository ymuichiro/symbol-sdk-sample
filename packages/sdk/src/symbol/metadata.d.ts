/**
 * Creates a metadata payload for updating old value to new value.
 * @param {Uint8Array} oldValue Old metadata value.
 * @param {Uint8Array} newValue New metadata value.
 * @returns {Uint8Array} Metadata payload for updating old value to new value.
 */
export function metadataUpdateValue(oldValue: Uint8Array, newValue: Uint8Array): Uint8Array;
