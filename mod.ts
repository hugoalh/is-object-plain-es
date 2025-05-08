/**
 * Determine whether the item is plain object.
 * @param {unknown} item Item that need to determine.
 * @returns {item is object} Determine result.
 */
export function isObjectPlain(item: unknown): item is object {
	if (
		typeof item !== "object" ||
		item === null ||
		Array.isArray(item) ||
		!(item instanceof Object) ||
		item.constructor.name !== "Object" ||
		Object.prototype.toString.call(item) !== "[object Object]" ||
		Object.getOwnPropertySymbols(item).length > 0
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
	return Object.entries(Object.getOwnPropertyDescriptors(item)).every(([key, properties]: [string, PropertyDescriptor]): boolean => {
		return (Object.hasOwn(item, key) && properties.configurable === true && properties.enumerable === true && properties.writable === true && typeof properties.get === "undefined" && typeof properties.set === "undefined");
	});
}
export default isObjectPlain;
