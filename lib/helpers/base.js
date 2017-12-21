'use strict'

const _ = require('lodash')

module.exports = {
  get: ([obj, path, def = '']) => _.get(obj, path, def),
  set: ([obj, path, val]) => {
    _.set(obj, path, val)
  },
  default: ([obj, def]) => obj === undefined && def,
  and: (args) => args.reduce((res, bool) => res && bool, true),
  or: (args) => args.reduce((res, bool) => res || bool, false),
  isEmpty: ([obj]) => _.isEmpty(obj),
  eq: ([a, b]) => a === b,
  unlessEq: ([a, b]) => a !== b,
  gt: ([a, b]) => a > b,
  gte: ([a, b]) => a >= b,
  lt: ([a, b]) => a < b,
  lte: ([a, b]) => a <= b,
  is: ([a, b]) => a == b, // eslint-disable-line eqeqeq
  isnt: ([a, b]) => a != b, // eslint-disable-line eqeqeq
  not: ([a]) => !a,
  encodeURI: ([a]) => encodeURI(a),
  decodeURI: ([a]) => decodeURI(a),
  encodeURIComponent: ([a]) => encodeURIComponent(a),
  decodeURIComponent: ([a]) => decodeURIComponent(a)
}
