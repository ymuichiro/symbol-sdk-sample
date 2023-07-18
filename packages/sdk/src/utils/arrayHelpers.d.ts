export function deepCompare(lhs: object, rhs: object): number;
export function alignUp(size: number, alignment: number): number;
export function size(elements: Array<object>, alignment?: number, skipLastElementPadding?: boolean): number;
export function readArray(bufferInput: Uint8Array, FactoryClass: type, accessor?: Function): Array<object>;
export function readArrayCount(bufferInput: Uint8Array, FactoryClass: type, count: number, accessor?: Function): Array<object>;
export function readVariableSizeElements(bufferInput: Uint8Array, FactoryClass: type, alignment: number, skipLastElementPadding?: boolean): Array<object>;
export function writeArray(output: Writer, elements: Array<object>, accessor?: Function): void;
export function writeArrayCount(output: any, elements: any, count: any, accessor?: any): void;
export function writeVariableSizeElements(output: Writer, elements: Array<object>, alignment: number, skipLastElementPadding?: boolean): void;
