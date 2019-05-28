## JS Modules

[Export and Import](https://javascript.info/import-export)

### Default Exports vs Named Exports

| | Default Exports | Named Exports |
|-|-|-|
| Limit | Only one default export allowed per file | Multiple named exports allowed per file |
| Name Matching | Default export can be imported with any name | Import name must match the corresponding named export |
| Tree shaking | Everything in default export module is imported. This is considered anti-pattern and doesn't allow tree-shaking | Benefits from tree-shaking as only required parts are imported |
| IDE dependencies discovery | Import name is independent to module's default export, therefore IDE is unable to auto import default exports | IDE can auto import specific named exports |
| Recommended usage | When module has a *main* usage, may be accompanied by named exports for reuse | When a subset of a module can be used independently of others |

**Name Matching**

Import name is independent of module's default export. For example, to import module.js into index.js:
```
// module.js
export default function module() {
    return true;
}
```
```
// index.js
import module from "./module";      // valid
import customName from "./module";  // also valid
```

However, import name must match the module's named exports, for example:
```
// module.js
export function module1 () {
    return true;
}
```
```
// index.js
import { module1 } from "./module";   // valid
import { module2 } from "./module";   // undefined
```

### References
1. [export - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
2. [ES Modules: Using Named Exports as the Default Export](https://medium.com/@timoxley/named-exports-as-the-default-export-api-670b1b554f65)
3. [Why I've stopped exporting defaults from my JavaScript modules - Human Who Codes](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/)
4. [Why we have banned default exports in Javascript and you should do the same](https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad)

## Dynamically load all module files in folder

- [webpack - What is `require.context` - Stack Overflow](https://stackoverflow.com/questions/54059179/what-is-require-context)