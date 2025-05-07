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
	let itemEntriesCount: number = 0;
	for (const [key, properties] of Object.entries(Object.getOwnPropertyDescriptors(item))) {
		if (
			!Object.hasOwn(item, key) ||
			!properties.configurable ||
			!properties.enumerable ||
			!properties.writable ||
			typeof properties.get !== "undefined" ||
			typeof properties.set !== "undefined"
		) {
			return false;
		}
		itemEntriesCount += 1;
	}
	if (Object.entries(item).length !== itemEntriesCount) {
		return false;
	}
	return true;
}
export default isObjectPlain;
