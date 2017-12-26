'use strict'

exports.eval = (str, def = '') => {
  return exports.try(Function(`return ${str}`), undefined, def) // eslint-disable-line no-new-func
}

exports.getHelpers = (obj, handler, except = []) => {
  except = except.concat(['constructor', 'toString', 'toLocaleString', 'valueOf'])

  return Object.getOwnPropertyNames(obj).reduce((helpers, key) => {
    if (obj[key] instanceof Function && except.indexOf(key) < 0) {
      helpers[key] = handler(key)
    }

    return helpers
  }, {})
}

exports.error = (obj, type) => {
  return new TypeError(``)
}

exports.isBlock = (options) => {
  return typeof options === 'object' &&
    typeof options.hash === 'object' &&
    typeof options.fn === 'function' &&
    typeof options.inverse === 'function'
}

exports.try = (fn, args, def, ctx) => {
  if (!fn) return
  if (!Array.isArray(args)) args = [args]

  try {
    return fn.apply(ctx, args)
  } catch (err) {
    return def
  }
}
