# Is Object Plain (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[GitHub](https://github.com/hugoalh/is-object-plain-es)
● [JSR](https://jsr.io/@hugoalh/is-object-plain)
● [NPM](https://www.npmjs.com/package/@hugoalh/is-object-plain)

An ECMAScript module to determine whether the item is plain object.

## 🎯 Runtime Targets

Any runtime which support ECMAScript should able to use this; These runtimes are officially supported:

- **[Bun](https://bun.sh/)** >= v1.1.0
- **[Deno](https://deno.land/)** >= v2.1.0
- **[NodeJS](https://nodejs.org/)** >= v20.9.0

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources & Entrypoints

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/is-object-plain-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/is-object-plain[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/is-object-plain[@{Tag}]
  ```

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

> [!NOTE]
> - Different runtimes have vary support for the sources and entrypoints, visit the runtime documentation for more information.
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## 🧩 APIs

- ```ts
  function isObjectPlain(item: unknown): item is object;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/is-object-plain)

## ✍️ Examples

- ```ts
  isObjectPlain(new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
  ]));
  //=> false
  ```
- ```ts
  isObjectPlain({
    a: 1,
    b: 2,
    c: 3
  });
  //=> true
  ```
