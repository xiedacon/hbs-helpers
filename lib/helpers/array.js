'use strict'

const utils = require('../utils')

module.exports = Object.assign({},
  utils.getHelpers(Array, (key) => {
    return (args) => {
      return Array[key].apply(Array, args)
    }
  }, ['from', 'of']),
  utils.getHelpers(Array.prototype, (key) => {
    return ([arr, ...args]) => {
      if (!arr) arr = []
      if (typeof arr === 'string') utils.eval(arr, [])
      if (!Array.isArray(arr)) throw utils.error(arr, Array)

      return Array.prototype[key].apply(arr, args)
    }
  }, ['observe', 'unobserve', 'map', 'keys', 'entries', 'forEach', 'filter', 'every', 'some', 'reduce', 'reduceRight', 'find', 'findIndex']),
  {
    arrayify: ([val]) => {
      if (!val) return []
      else if (Array.isArray(val)) return val
      else return [val]
    },
    inArray: ([arr, val]) => {
      if (!arr) arr = []
      if (typeof arr === 'string') arr = utils.eval(arr, [])
      if (!Array.isArray(arr)) throw utils.error(arr, Array)

      return arr.indexOf(val) >= 0
    },
    itemAt: ([arr, index]) => {
      if (!arr) arr = []
      if (typeof arr === 'string') arr = utils.eval(arr, [])
      if (!Array.isArray(arr)) throw utils.error(arr, Array)

      return arr[index]
    }
  }
)
