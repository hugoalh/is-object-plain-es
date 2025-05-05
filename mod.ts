/**
 * Determine whether the object is plain.
 * @param {object} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isObjectPlain(item: object): boolean {
	if (
		typeof item !== "object" ||
		item === null ||
		!(item instanceof Object) ||
		item.constructor.name !== "Object" ||
		Object.prototype.toString.call(item) !== "[object Object]"
	) {
		return false;
	}
	const itemPrototype: unknown = Object.getPrototypeOf(item);
	if (itemPrototype !== null && itemPrototype !== Object.prototype) {
		return false;
	}
	let itemShadow: object = item;
	while (Object.getPrototypeOf(itemShadow) !== null) {
		itemShadow = Object.getPrototypeOf(itemShadow);
	}
	if (itemPrototype !== itemShadow) {
		return false;
	}
	if (Object.getOwnPropertySymbols(item).length > 0) {
		return false;
	}
	const itemDescriptors = Object.getOwnPropertyDescriptors(item);
	let enumerableCount: number = 0;
	for (const descriptor in itemDescriptors) {
		if (Object.hasOwn(item, descriptor)) {
			const properties: PropertyDescriptor = itemDescriptors[descriptor];
			if (
				!properties.configurable ||
				!properties.enumerable ||
				!properties.writable ||
				typeof properties.get !== "undefined" ||
				typeof properties.set !== "undefined"
			) {
				return false;
			}
			enumerableCount += 1;
		} else {
			return false;
		}
	}
	if (Object.entries(item).length !== enumerableCount) {
		return false;
	}
	return true;
}
export default isObjectPlain;
