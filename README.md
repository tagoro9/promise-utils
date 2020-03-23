# `@tagoro9/promise-utils`

Set of utility functions to use when working with promises

## Installation

```bash
yarn add @tagoro9/promise-utils
```

Or with npm

```
npm install @tagoro9/promise-utils
```

## Usage

Import the functions that you want to use from the module

## Functions

* `series`. Execute an array of promise providers in series and return an array with the result of all promises

```js
import {series} from '@tagoro9/promise-utils';
async function main() {
  const data = await series([
    () => Promise.resolve(1),
    () => Promise.resolve(2)
  ]); // [1, 2]
}
```
