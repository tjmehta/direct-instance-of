var Code = require('code')
var Lab = require('lab')
var util = require('util')

var directInstanceOf = require('../index.js')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

function Animal () {
  this.alive = true
}
Animal.prototype.die = function () {
  this.alive = false
}
function Mammal (locomotion) {
  this.hasHair = true
  this.liveBirth = true
  this.locomotion = locomotion
}
util.inherits(Mammal, Animal)
Mammal.prototype.canSwim = function () {
  return this.locomotion === 'swim'
}
function Cat () {
  Mammal.call(this, 'walk')
}
util.inherits(Cat, Mammal)

describe('directInstanceOf', function () {
  it("should check if a primitives are direct instances of it's class", function (done) {
    /* eslint-disable */
    expect(directInstanceOf(10, Number)).to.be.true()
    expect(directInstanceOf(new Number(10), Number)).to.be.true()
    expect(directInstanceOf('hi', String)).to.be.true()
    expect(directInstanceOf(new String('hi'), String)).to.be.true()
    expect(directInstanceOf(true, Boolean)).to.be.true()
    expect(directInstanceOf(new Boolean(true), Boolean)).to.be.true()
    /* eslint-enable */
    done()
  })
  it("should check if a instances are direct instances of it's class", function (done) {
    expect(directInstanceOf(new Cat('walk'), Cat)).to.be.true()
    expect(directInstanceOf(new Cat('walk'), Mammal)).to.be.false()
    expect(directInstanceOf(new Cat('walk'), Animal)).to.be.false()
    expect(directInstanceOf(new Mammal(), Mammal)).to.be.true()
    expect(directInstanceOf(new Mammal(), Animal)).to.be.false()
    expect(directInstanceOf(new Animal(), Animal)).to.be.true()
    done()
  })

  describe('errors', function () {
    it('should throw an error if val is not passed', function (done) {
      expect(directInstanceOf).to.throw(/val.*required/)
      done()
    })
    it('should throw an error if Class is not passed', function (done) {
      expect(directInstanceOf.bind(null, 'val')).to.throw(/Class.*required/)
      done()
    })
  })
})
