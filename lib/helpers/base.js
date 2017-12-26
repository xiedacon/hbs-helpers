'use strict'

const _ = require('lodash')
const utils = require('../utils')

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
  encodeURI: ([a]) => utils.try(encodeURI, a, a),
  decodeURI: ([a]) => utils.try(decodeURI, a, a),
  encodeURIComponent: ([a]) => utils.try(encodeURIComponent, a, a),
  decodeURIComponent: ([a]) => utils.try(decodeURIComponent, a, a)
}
