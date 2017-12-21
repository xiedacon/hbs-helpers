'use strict'

const baseHelpers = require('./base')
const mathHelpers = require('./math')
const arrayHelpers = require('./array')
const numberHelpers = require('./number')
const stringHelpers = require('./string')
const objectHelpers = require('./object')
const jsonHelpers = require('./json')

module.exports = {
  ...baseHelpers,
  ...mathHelpers,
  ...arrayHelpers,
  ...numberHelpers,
  ...stringHelpers,
  ...objectHelpers,
  ...jsonHelpers
}
