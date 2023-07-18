export default charMapping;
declare namespace charMapping {
    function createBuilder(): CharacterMapBuilder;
}
/**
 * Builder for building a character map.
 */
declare class CharacterMapBuilder {
    /**
     * Mapping of charcters to character codes.
     * @type Map<string, number>
     */
    map: Map<string, number>;
    /**
     * Adds a range mapping to the map.
     * @param {string} start Start character.
     * @param {string} end End character.
     * @param {number} base Value corresponding to the start character.
     */
    addRange(start: string, end: string, base: number): void;
}
