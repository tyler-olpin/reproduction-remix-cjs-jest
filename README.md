## What?

This demonstrates jest test failure when importing from `@remix-run/react` in a `cjs` project.

## Reproduction

1. Clone this repo
2. Run `pnpm install`
3. Run `pnpm test`

## Expected?

The test should pass.

## Actual?

When importing from `@remix-run/react` in a `cjs` project, the jest test fails with the following error:

```
 FAIL  tests/reproduction.spec.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /Projects/reproduction/remix-jest-test/node_modules/.pnpm/@web3-storage+multipart-parser@1.0.0/node_modules/@web3-storage/multipart-parser/esm/src/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import {
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      1 | import { render, screen } from "@testing-library/react";
      2 | // 1️⃣→ COMMENT OUT THE NEXT LINE
    > 3 | import { Link } from "@remix-run/react";
        | ^
      4 |
      5 | // 2️⃣→ UNCOMMENT THIS CODEBLOCK
      6 | // const Link = ({ children, to = "" }: { children: any; to: string }) => {

      at Runtime.createScriptFromCode (node_modules/.pnpm/jest-runtime@29.7.0/node_modules/jest-runtime/build/index.js:1505:14)
      at Object.<anonymous> (tests/reproduction.spec.tsx:3:1)
```

## Notes

When you comment out the import (1️⃣) and replace it with the codeblock below (2️⃣), the test passes.
