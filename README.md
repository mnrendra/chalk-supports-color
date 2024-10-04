# @mnrendra/chalk-supports-color

Refactor the [supports-color](https://github.com/chalk/supports-color) code into **TypeScript** and ensure the output supports both **CommonJS (CJS)** and **ES Modules (ESM)** with mixed exports. This will allow users to `import` or `require` the module without needing to access the `.default` property.

## Benefits
- ✅ Auto-detection for `browser` and `node` platforms
- ✅ Supports both **CommonJS (CJS)** and **ES Modules (ESM)**
- ✅ Mixed exports (no need to access `.default` for default value)
- ✅ Minified distribution package
- ✅ Well-tested (100% code coverage)
- ✅ **TypeScript** source code for easier development

## Reference
Refactored from the [original source code](https://github.com/chalk/supports-color) since version [v9.4.0](https://github.com/chalk/supports-color/releases/tag/v9.4.0), commit [c214314](https://github.com/chalk/supports-color/commit/c214314a14bcb174b12b3014b2b0a8de375029ae).

## Install
```bash
npm i @mnrendra/chalk-supports-color
```

## Usage

Using `CommonJS`:
```javascript
const supportsColor = require('@mnrendra/chalk-supports-color')

const {
  stdout,
  stderr,
  createSupportsColor
} = require('@mnrendra/chalk-supports-color')

// from default export
console.log(supportsColor)
console.log(supportsColor.default)
console.log(supportsColor.stdout)
console.log(supportsColor.stderr)
// from named exports
console.log(stdout)
console.log(stderr)
console.log(createSupportsColor({ isTTY: true }))
```

Using `ES Modules`:
```javascript
import supportsColor, {
  stdout,
  stderr,
  createSupportsColor
} from '@mnrendra/chalk-supports-color'

// from default export
console.log(supportsColor)
console.log(supportsColor.default)
console.log(supportsColor.stdout)
console.log(supportsColor.stderr)
// from named exports
console.log(stdout)
console.log(stderr)
console.log(createSupportsColor({ isTTY: true }))
```

For more details, refer to the original source code: [https://github.com/chalk/supports-color](https://github.com/chalk/supports-color).

## Types
```typescript
import type {
  ColorSupportLevel,
  ColorSupport,
  ColorInfo,
  SupportsColor,
  Options
} from '@mnrendra/chalk-supports-color'
```

## Contribute
Contributions are always welcome! Please open discussions [here](https://github.com/mnrendra/chalk-supports-color/discussions).

## Special Thanks 🙇
- [sindresorhus](https://github.com/sindresorhus) for creating the [original source code](https://github.com/chalk/supports-color).
- [Qix-](https://github.com/Qix-) for being the active maintainer of the [original source code](https://github.com/chalk/supports-color).

## License
[MIT](https://github.com/mnrendra/chalk-supports-color/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
