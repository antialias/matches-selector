# matches-selector

Check if an element matches a given selector.

## History

This package is useful when bundling a library that will be used for universal rendering.
It was forked from a merge of component-matches-selector and matches-selector. Neither package was able to br required from an environment that didn't have DOM objects available in the global scope. This package fixes that, but for obvious reasons, will still throw errors if DOM globals, e.g. `document` and `Element` aren't available.

## Installation

    $ npm install matches-selector-universal

## Example

```js
var matches = require('matches-selector-universal');
matches(el, 'ul li a');
// => true or false
```

## Running Tests

Tests are run with karma + mocha + webpack. An additional test is performed to ensure that the code does not throw errors when required by node with no DOM globals.

```
npm install
npm test
```

## License

  MIT
