'use strict'

const assets = require('../assets')
const utils = require('../utils')

module.exports = {
  keys: ([obj], opt) => {
    let keys = Object.keys(obj)
    if (!utils.isBlock(opt)) return keys

    let data = assets.Handlebars.createFrame(opt.data)
    return keys.reduce((res, key, index) => {
      data.index = index
      return res + opt.fn(key, { data })
    }, '')
  },
  values: ([obj], opt) => {
    let values = Object.values(obj)
    if (!utils.isBlock(opt)) return values

    let data = assets.Handlebars.createFrame(opt.data)
    return values.reduce((res, value, index) => {
      data.index = index
      return res + opt.fn(value, { data })
    }, '')
  },
  entries: ([obj], opt) => {
    let entries = Object.entries(obj)
    if (!utils.isBlock(opt)) return entries

    let data = assets.Handlebars.createFrame(opt.data)
    return entries.reduce((res, [key, value], index) => {
      data = Object.assign(data, { key, value, index })
      return res + opt.fn({}, { data })
    }, '')
  }
}
