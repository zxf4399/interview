/**
 * _instanceof
 */
function _instanceof(left, right) {
  if (!left || !right) return false

  let rightPrototype = right.prototype
  let leftProto = Object.getPrototypeOf(left)

  while (true) {
    if (leftProto === null) {
      return false
    }

    if (leftProto === rightPrototype) {
      return true
    }

    leftProto = Object.getPrototypeOf(leftProto)
  }
}

function Person(name) {
  this.name = name
}

Person.prototype.walk = function () {
  console.log(`${this.name} walking...`)
}

let zxf4399 = new Person('zxf4399')

console.log(_instanceof(zxf4399, Person))
console.log(_instanceof(zxf4399, Object))
console.log(_instanceof(zxf4399, null))
