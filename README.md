# Is Object Plain (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/is-object-plain-es](https://img.shields.io/github/v/release/hugoalh/is-object-plain-es?label=hugoalh/is-object-plain-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/is-object-plain-es")](https://github.com/hugoalh/is-object-plain-es)
[![JSR: @hugoalh/is-object-plain](https://img.shields.io/jsr/v/@hugoalh/is-object-plain?label=@hugoalh/is-object-plain&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/is-object-plain")](https://jsr.io/@hugoalh/is-object-plain)
[![NPM: @hugoalh/is-object-plain](https://img.shields.io/npm/v/@hugoalh/is-object-plain?label=@hugoalh/is-object-plain&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/is-object-plain")](https://www.npmjs.com/package/@hugoalh/is-object-plain)

An ECMAScript (JavaScript & TypeScript) module to determine whether the item is plain object.

## 🔰 Begin

### 🎯 Targets

| **Targets** | **Remote** | **JSR** | **NPM** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❓ | ✔️ | ✔️ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh/is-object-plain-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/is-object-plain[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/is-object-plain[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Runtime Permissions

*This module does not request any runtime permission.*

## 🧩 APIs

- ```ts
  function isObjectPlain(item: unknown): item is object;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
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
