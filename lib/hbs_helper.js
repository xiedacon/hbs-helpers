'use strict'

const utils = require('./utils')
const baseHelpers = require('./helpers')
const assets = require('./assets')

function blockWarpper (helper) {
  return function (...args) {
    let opt = optWarpper(args.pop())

    let ret = helper.call(this, args, opt, {
      eval: utils.eval,
      isBlock: utils.isBlock
    })
    if (!opt.called && utils.isBlock(opt)) return ret ? opt.fn(this) : opt.inverse(this)
    else return ret
  }
}

function optWarpper (opt) {
  let fn = opt.fn
  let inverse = opt.inverse

  if (typeof fn === 'function') {
    opt.fn = function () {
      opt.called = 1
      return fn.apply(this, arguments)
    }
  }

  if (typeof inverse === 'function') {
    opt.inverse = function () {
      opt.called = 1
      return inverse.apply(this, arguments)
    }
  }

  return opt
}

module.exports = ({handlebars, helpers = {}, aliases = {}}) => {
  if (!handlebars) throw new Error('The option `handlebars` must be specified.')
  if (!(handlebars.registerHelper instanceof Function)) throw new Error('The option `handlebars` must have a functiion named `registerHelper`.')

  assets.Handlebars = handlebars.handlebars
  helpers = Object.assign({}, baseHelpers, helpers)

  Object.keys(helpers).forEach((helper) => {
    handlebars.registerHelper(helper, blockWarpper(helpers[helper]))
  })

  Object.keys(aliases).forEach((helper) => {
    if (!helpers[helper]) throw new Error(`There isn't a helper named \`${helper}\``)

    let alias = aliases[helper]
    if (!Array.isArray(alias)) alias = [alias]

    alias.forEach((name) => {
      handlebars.registerHelper(name, blockWarpper(helpers[helper]))
    })
  })
}
