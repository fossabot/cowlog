require('colors')
const stringifyObject = require('stringify-object')

module.exports = exports = function (container) {

  return {
    getInverseString: function (inverse, string) {
      if (inverse) {
        return string.inverse
      }
      return string
    },

    printMsg: function (message) {
      return message
    },

    serialize: function (data) {
      return stringifyObject(data, {
        indent: '  ',
        singleQuotes: false
      })
    }
  }
}