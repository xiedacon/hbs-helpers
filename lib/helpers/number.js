'use strict'

const utils = require('../utils')

exports = module.exports = Object.assign({},
  utils.getHelpers(Number, (key) => {
    return (args) => {
      return Number[key].apply(Number, args)
    }
  }),
  utils.getHelpers(Number.prototype, (key) => {
    return ([number, ...args]) => {
      if (!number) number = 0
      if (typeof number === 'string') utils.eval(number)
      if (typeof number !== 'number') throw utils.error(number, Number)

      return Number.prototype[key].apply(number, args)
    }
  }),
  {
    number: ([a]) => Number(a)
  }
)
