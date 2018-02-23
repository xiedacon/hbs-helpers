'use strict'

const utils = require('../utils')

exports = module.exports = Object.assign({},
  utils.getHelpers(String, (key) => {
    return (args) => {
      return String[key].apply(String, args)
    }
  }),
  utils.getHelpers(String.prototype, (key) => {
    return ([str, ...args]) => {
      if (!str) str = ''
      if (typeof str !== 'string') throw utils.error(str, String)

      return String.prototype[key].apply(str, args)
    }
  }, ['anchor', 'big', 'blink', 'bold', 'fixed', 'fontcolor', 'fontsize', 'italics', 'link', 'small', 'strike', 'sub', 'sup', 'quote', 'toSource', 'concat', 'includes', 'indexOf', 'lastIndexOf', 'slice']),
  {
    string: ([a]) => String(a)
  }
)
