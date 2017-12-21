'use strict'

const utils = require('../utils')

module.exports = Object.assign({},
  utils.getHelpers(Math, (key) => {
    return (args) => {
      return Math[key].apply(Math, args)
    }
  }),
  {
    add: (args) => {
      if (typeof args[0] === 'number') return args.reduce((sum, n) => sum + n, 0)
      else return args.join('')
    },
    subtract: (args) => args.reduce((n, m) => n - m, 0),
    multiply: (args) => args.reduce((n, m) => n * m, 1),
    divide: (args) => args.reduce((n, m) => n / m),
    avg: (args) => {
      if (args.length <= 0) return 0

      let sum = exports.add(args)
      if (typeof sum !== 'number') throw utils.error(args, Number)
      return sum / args.length
    }
  }
)
