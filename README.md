# hbs-helpers

[![Build Status](https://travis-ci.org/xiedacon/hbs-helpers.svg?branch=master)](https://travis-ci.org/xiedacon/hbs-helpers)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/xiedacon/hbs-helpers/blob/master/LICENSE)

## Requirements

Node.js v8.x

## Usage

```js
const handlebars = require('handlebars')

require('hbs-helpers')({
  handlebars: handlebars
})

// with local helpers
require('hbs-helpers')({
  handlebars: handlebars,
  helpers: {
    greatThenThree: ([n]) => n > 3
  }
})

// with alias
require('hbs-helpers')({
  handlebars: handlebars,
  aliases: {
    unlessEq: 'notEq'
    // or
    unlessEq: ['notEq']
  }
})
```

## API

All helpers can be use as [block helpers](https://handlebarsjs.com/block_helpers.html)

```
{{#eq a 'a'}}

{{/eq}}
```

or [inline helpers](https://handlebarsjs.com/#helpers)

```
{{#and (eq a 'a') (eq b 'b')}}
  {{dosomething}}
{{/and}}
```

* [Base](#base)
* [Array](#array)
* [Json](#json)
* [Math](#math)
* [Number](#number)
* [Object](#object)
* [String](#string)

#### Base

* [get]()

  **Params:**

  * ``obj`` **{any}**
  * ``path`` **{string}**
  * ``def`` **{any}**
  * ``returns`` **{any}**

  like ``_.get``

  **Example:**

  ```
  // a: { a: '1' }
  {{get a 'a'}}
  // returns: ['1']

  // a: { a: '1' }
  {{get a 'b' '2'}}
  // returns: ['2']
  ```

* [set]()

  **Params:**

  * ``obj`` **{any}**
  * ``path`` **{string}**
  * ``val`` **{any}**

  like ``_.set``

  **Example:**

  ```
  // a: {}
  {{set a 'a' '1'}}
  // a: { a: '1' }
  ```

* [default]()

  **Params:**

  * ``obj`` **{any}**
  * ``def`` **{any}**
  * ``returns`` **{any}**

  **Example:**

  ```
  // a: 1
  {{default a 2}}
  // returns: 1

  // a: undefined
  {{default a 2}}
  // returns: 2
  ```

* [and]()

  **Params:**

  * ``bool*`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 2
  // c: 3
  {{#and (eq a 1) (eq b 2) c}}
    // a === 1 && b === 2 && c
  {{/and}}
  ```

* [or]()

  **Params:**

  * ``bool*`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 2
  // c: 3
  {{#or (eq a 1) (eq b 2) c}}
    // a === 1 || b === 2 || c
  {{/or}}
  ```

* [isEmpty]()

  **Params:**

  * ``val`` **{any}**
  * ``returns`` **{Boolean}**

  like ``_.isEmpty``

  **Example:**

  ```
  // a: { a: '1' }
  {{#isEmpty a}}
    // _.isEmpty(a)
  {{/isEmpty}}
  ```

* [eq]()

  **Params:**

  * ``val1`` **{any}**
  * ``val2`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 1
  {{#eq a b}}
    // a === b
  {{/eq}}
  ```

* [unlessEq]()

  **Params:**

  * ``val1`` **{any}**
  * ``val2`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 1
  {{#unlessEq a b}}
    // a !== b
  {{/unlessEq}}
  ```

* [gt]()

  **Params:**

  * ``val1`` **{any}**
  * ``val2`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 1
  {{#gt a b}}
    // a > b
  {{/gt}}
  ```

* [gte]()

  **Params:**

  * ``val1`` **{any}**
  * ``val2`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 1
  {{#gte a b}}
    // a >= b
  {{/gte}}
  ```

* [lt]()

  **Params:**

  * ``val1`` **{any}**
  * ``val2`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 1
  {{#lt a b}}
    // a < b
  {{/lt}}
  ```

* [lte]()

  **Params:**

  * ``val1`` **{any}**
  * ``val2`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 1
  {{#lte a b}}
    // a <= b
  {{/lte}}
  ```

* [is]()

  **Params:**

  * ``val1`` **{any}**
  * ``val2`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 1
  {{#is a b}}
    // a == b
  {{/is}}
  ```

* [isnt]()

  **Params:**

  * ``val1`` **{any}**
  * ``val2`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  // b: 1
  {{#isnt a b}}
    // a != b
  {{/isnt}}
  ```

* [not]()

  **Params:**

  * ``val`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // a: 1
  {{#not a}}
    // !a
  {{/not}}
  ```

* [encodeURI]()

  **Params:**

  * ``val`` **{String}**
  * ``returns`` **{String}**

  When error throw, the raw value well be return

  **Example:**

  ```
  // a: '%'
  {{encodeURI a}} // encodeURI(a)
  // returns: '%25'  
  ```

* [decodeURI]()

  **Params:**

  * ``val`` **{String}**
  * ``returns`` **{String}**

  When error throw, the raw value well be return

  **Example:**

  ```
  // a: '%25'
  {{decodeURI a}} // decodeURI(a)
  // returns: '%'  
  ```

* [encodeURIComponent]()

  **Params:**

  * ``val`` **{String}**
  * ``returns`` **{String}**

  When error throw, the raw value well be return

  **Example:**

  ```
  // a: '?'
  {{encodeURIComponent a}} // encodeURIComponent(a)
  // returns: '%3F'
  ```

* [decodeURIComponent]()

  **Params:**

  * ``val`` **{String}**
  * ``returns`` **{String}**

  When error throw, the raw value well be return

  **Example:**

  ```
  // a: '%3F'
  {{decodeURIComponent a}} // decodeURIComponent(a)
  // returns: '?'
  ```

#### Array

Supported functions:

* [Array.isArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
* [Array.prototype.concat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* [Array.prototype.pop](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
* [Array.prototype.push](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
* [Array.prototype.shift](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
* [Array.prototype.unshift](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
* [Array.prototype.slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* [Array.prototype.splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
* [Array.prototype.includes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
* [Array.prototype.indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
* [Array.prototype.join](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
* [Array.prototype.reverse](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
* [Array.prototype.sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [Array.prototype.lastIndexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
* [Array.prototype.copyWithin](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
* [Array.prototype.fill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

  **Example:**

  ```
  {{#isArray a}} 
    // Array.isArray(a)
  {{/isArray}}
  ```

  First argument of prototype functions must be an array or array like string

  ```

  // a: [1, 2, 3]
  {{indexof a 1}} // a.indexof(1)

  or

  {{indexof "[1, 2, 3]" 1}} // [1, 2, 3].indexof(1)
  ```

* [arrayify]()

  **Params:**

  * ``val`` **{any}**
  * ``returns`` **{Array}**

  **Example:**

  ```
  {{arrayify 'foo'}}
  // returns: ['foo']
  ```

* [inArray]()

  **Params:**

  * ``arr`` **{Array}**
  * ``val`` **{any}**
  * ``returns`` **{Boolean}**

  **Example:**

  ```
  // arr: ['a', 'b', 'c']
  {{#inArray arr 'a'}}
    // 'a' in arr
  {{inArray}}

  or

  // a: 'a'
  {{#inArray "['a', 'b', 'c']" a}}
    // a in ['a', 'b', 'c']
  {{inArray}}
  ```

* [itemAt]()

  **Params:**

  * ``arr`` **{Array}**
  * ``index`` **{Number}**
  * ``returns`` **{any}**

  **Example:**

  ```
  // arr: ['a', 'b', 'c']
  {{itemAt arr 0}}
  // returns: 'a'

  or

  // a: 0
  {{itemAt "['a', 'b', 'c']" a}}
  // returns: 'a'
  ```

For iterator Array, you should use [build-in helper ``each``](https://handlebarsjs.com/builtin_helpers.html#iteration)

#### Json

* [stringify]()

  **Params:**

  * ``obj`` **{any}**
  * ``returns`` **{String}**

  **Example:**

  ```
  // a: { a: '1' }
  {{stringify a}}
  // returns: '{"a":"1"}'
  ```

#### Math

* All build-in functions on [Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) are support

  **Example:**

  ```
  // a: -1
  {{abs a}}
  // returns: 1
  ```

* [add]()
  
  **Params:**

  * ``val*`` **{any}**
  * ``returns`` **{String/Number}**

  **Example:**

  ```
  // a: 1
  // b: 2
  // c: 3
  {{add a b c}}
  // returns: 6

  // a: '1'
  // b: 2
  // c: 3
  {{add a b c}}
  // returns: '123'
  ```

* [subtract]()

  **Params:**

  * ``val*`` **{any}**
  * ``returns`` **{Number}**

  **Example:**

  ```
  // a: 6
  // b: 2
  // c: 3
  {{subtract a b c}}
  // returns: 1
  ```

* [multiply]()

  **Params:**

  * ``val*`` **{any}**
  * ``returns`` **{Number}**

  **Example:**

  ```
  // a: 1
  // b: 2
  // c: 3
  {{multiply a b c}}
  // returns: 6
  ```

* [divide]()

  **Params:**

  * ``val*`` **{any}**
  * ``returns`` **{Number}**

  **Example:**

  ```
  // a: 6
  // b: 2
  // c: 3
  {{divide a b c}}
  // returns: 1
  ```

* [avg]()

  **Params:**

  * ``val*`` **{any}**
  * ``returns`` **{Number}**

  **Example:**

  ```
  // a: 1
  // b: 2
  // c: 3
  {{avg a b c}}
  // returns: 2
  ```
  
#### Number

* All build-in functions on [Number and Number.prototype](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) are support

  **Example:**

  ```
  // a: 1
  {{#isNaN a}}
    // Number.isNaN(a)
  {{/isNaN}}
  ```

  First argument of prototype functions must be a number or number like string

  ```
  // a: 1
  {{toFixed a 2}}
  // returns: '1.00'
  ```

* [number]()

  **Params:**

  * ``val`` **{any}**
  * ``returns`` **{Number}**

  **Example:**

  ```
  // a: '1'
  {{number a}}
  // returns: 1
  ```

#### Object

* [keys]()

  **Params:**

  * ``val`` **{any}**

  **Example:**

  ```
  // a: { a: '1' }
  {{#keys a}}
    this // current key
    @index // current index
  {{/keys}}

  or inline

  // a: { a: '1' }
  {{keys a}}
  // returns: ['a']
  ```

* [values]()

  **Params:**

  * ``val`` **{any}**

  **Example:**

  ```
  // a: { a: '1' }
  {{#values a}}
    this // current value
    @index // current index
  {{/values}}

  or inline

  // a: { a: '1' }
  {{values a}}
  // returns: ['1']
  ```

* [entries]()

  **Params:**

  * ``val`` **{any}**

  **Example:**

  ```
  // a: { a: '1' }
  {{#entries a}}
    @index // current index
    @key // current key
    @value // current value
  {{/entries}}

  or inline

  // a: { a: '1' }
  {{entries a}}
  // returns: [['a', '1']]
  ```

#### String

Supported functions:

* [String.fromCharCode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
* [String.fromCodePoint](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)
* [String.raw](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
* [String.prototype.charAt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
* [String.prototype.charCodeAt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* [String.prototype.codePointAt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
* [String.prototype.endsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
* [String.prototype.localeCompare](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
* [String.prototype.match](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)
* [String.prototype.normalize](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
* [String.prototype.padEnd](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
* [String.prototype.padStart](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
* [String.prototype.repeat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
* [String.prototype.replace](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
* [String.prototype.search](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search)
* [String.prototype.split](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)
* [String.prototype.substr](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
* [String.prototype.substring](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
* [String.prototype.startsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
* [String.prototype.trim](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
* [String.prototype.trimLeft](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft)
* [String.prototype.trimRight](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight)
* [String.prototype.toLowerCase](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
* [String.prototype.toUpperCase](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
* [String.prototype.toLocaleLowerCase](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)
* [String.prototype.toLocaleUpperCase](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)

  **Example:**

  ```
  {{fromCharCode 97}} // String.fromCharCode(97)
  // return 'a'
  ```

  First argument of prototype functions must be a string

  ```
  // a: ' a '
  {{trim a}} // a.trim()
  // return 'a'
  ```

* [string]()

  **Params:**

  * ``val`` **{any}**
  * ``returns`` **{String}**

  **Example:**

  ```
  // a: 1
  {{string a}}
  // returns: '1'
  ```



All helpers can be use as [block helpers](https://handlebarsjs.com/block_helpers.html) or [inline helpers](https://handlebarsjs.com/#helpers)

Never let your mind limit your imagination

## License

[MIT License](https://github.com/xiedacon/hbs-helpers/blob/master/LICENSE)

Copyright (c) 2017 xiedacon