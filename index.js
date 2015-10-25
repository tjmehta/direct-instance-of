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
  getPrototypeOf(val) === Class.prototype
}

// cross-node/browser compatible getPrototypeOf
function getPrototypeOf (val) {
  var proto
  try {
    proto = Object.getPrototypeOf(val)
  } catch (e) {
    /* eslint-disable */
    proto = val.__proto__
    /* eslint-enable */
  }
  return proto
}
