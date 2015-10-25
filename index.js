var exists = require('101/exists')

module.exports = directInstanceOf

function directInstanceOf (val, Class) {
  if (!exists(val)) {
    throw new TypeError('`val` is required')
  }
  if (!exists(Class)) {
    throw new TypeError('`Class` is required')
  }
  return val.constructor === Class &&
    Object.getPrototypeOf(val) === Class.prototype
}
