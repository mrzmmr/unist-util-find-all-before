# unist-util-find-all-before [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

[**Unist**][unist] utility to find nodes before another node.

## Installation

[npm][]:

```bash
npm install unist-util-find-all-before
```

## Usage

```js
var remark = require('remark')
var findAllBefore = require('unist-util-find-all-before')

var tree = remark().parse('Some _emphasis_, **importance**, and `code`.')
var paragraph = tree.children[0]
var code = paragraph.children[paragraph.children.length - 1]

console.log(findAllBefore(paragraph, code, 'text'))
```

Yields:

```js
[ { type: 'text', value: ', and ' },
  { type: 'text', value: ', ' },
  { type: 'text', value: 'Some ' } ]
```

## API

### `findAllBefore(parent, node|index[, test])`

Find the first child before `index` (or `node`) in `parent`, that passes `test`
(when given).

###### Parameters

*   `parent` ([`Node`][node]) — Context node
*   `node` ([`Node`][node]) — Node in `parent`
*   `index` (`number`, optional) — Position of a `node` in `parent`
*   `test` (`Function`, `string`, or `Node`, optional)
    — See [`unist-util-is`][is]

###### Returns

[`Array.<Node>`][node] — Child nodes of `parent` passing `test`.

## Related

*   [`unist-util-find-after`](https://github.com/syntax-tree/unist-util-find-after)
    — Find a node after another node
*   [`unist-util-find-before`](https://github.com/syntax-tree/unist-util-find-before)
    — Find a node before another node
*   [`unist-util-find-all-after`](https://github.com/syntax-tree/unist-util-find-all-after)
    — Find all nodes after another node
*   [`unist-util-find-all-between`](https://github.com/mrzmmr/unist-util-find-all-between)
    — Find all nodes between two nodes
*   [`unist-util-find`](https://github.com/blahah/unist-util-find)
    — Find nodes matching a predicate

## Contribute

See [`contributing.md` in `syntax-tree/unist`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/syntax-tree/unist-util-find-all-before.svg

[travis]: https://travis-ci.org/syntax-tree/unist-util-find-all-before

[codecov-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-find-all-before.svg

[codecov]: https://codecov.io/github/syntax-tree/unist-util-find-all-before

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[is]: https://github.com/syntax-tree/unist-util-is

[contributing]: https://github.com/syntax-tree/unist/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/unist/blob/master/code-of-conduct.md
