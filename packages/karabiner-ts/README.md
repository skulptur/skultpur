## `karabiner-ts`

Single paragraph about why this library exists

## Get started

Install

```bash
yarn add karabiner-ts
# or
npm install --save karabiner-ts
```

Use

```typescript
import { noop } from 'karabiner-ts'

console.log(noop()) // undefined
```

[Examples](https://github.com/skulptur/karabiner-ts/tree/master/example)

## API

- Pure functions.
- The argument order is optimized for partial application.

Exports:

### noop

`() => void`

```typescript
const nothing = noop() // undefined
```
