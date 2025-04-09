import { deepStrictEqual } from "node:assert";
import { isObjectPlain } from "./mod.ts";
class Sample1 {
	x: unknown;
	constructor(x: unknown) {
		this.x = x;
	}
}
function Sample2() { }
Sample2.prototype.constructor = Object;
Deno.test("Array With 2 Length", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(['foo', 'bar']), false);
});
Deno.test("Map", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(new Map([
		["a", 1],
		["b", 2],
		["c", 3]
	])), false);
});
Deno.test("Class Instance Standard", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(new Sample1(1)), false);
});
Deno.test("Math", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(Math), false);
});
Deno.test("JSON", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(JSON), false);
});
Deno.test("Atomics", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(Atomics), false);
});
Deno.test("Error Class", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(Error), false);
});
Deno.test("Function", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(() => { }), false);
});
Deno.test("Regular Expression", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(/./), false);
});
Deno.test("`null`", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(null as unknown as object), false);
});
Deno.test("Class Instance Legacy", { permissions: "none" }, () => {
	//@ts-ignore For test only.
	deepStrictEqual(isObjectPlain(new Sample2() as unknown as object), false);
});
Deno.test("InReg Object", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain({ constructor: Sample1 }), false);
});
Deno.test("Function Arguments", { permissions: "none" }, () => {
	(function () {
		deepStrictEqual(isObjectPlain(arguments), false);
	})();
});
Deno.test("Plain Object With 0 Entries", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain({}), true);
});
Deno.test("Plain Object With 2 Primitive Entries", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain({
		foo: true,
		valueOf: 0
	}), true);
});
Deno.test("Plain Object With 3 Primitive Entries", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain({
		a: 1,
		b: 2,
		c: 3
	}), true);
});
Deno.test("Object Constructor With `null`", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(Object.create(null)), false);
});
Deno.test("Object Constructor With `{}`", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(Object.create({})), false);
});
Deno.test("Object Instance", { permissions: "none" }, () => {
	deepStrictEqual(isObjectPlain(new Object()), true);
});
