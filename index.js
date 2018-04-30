'use strict'

var is = require('unist-util-is')

module.exports = findAllBefore

/* Find nodes before `index` in `parent` which pass `test`. */
function findAllBefore(parent, index, test) {
  var results = []
  var children
  var child

  if (!parent || !parent.type || !parent.children) {
    throw new Error('Expected parent node')
  }

  children = parent.children

  if (index && index.type) {
    index = children.indexOf(index)
  }

  if (isNaN(index) || index < 0 || index === Infinity) {
    throw new Error('Expected positive finite index or child node')
  }

  /* Performance. */
  if (index > children.length) {
    index = children.length
  }

  while (index--) {
    child = children[index]

    if (is(test, child, index, parent)) {
      results.push(child)
    }
  }

  return results
}
