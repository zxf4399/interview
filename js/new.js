function objectFactory() {
  var obj = new Object()

  var Constructor = [].shift.call(arguments)

  obj.__proto__ = Constructor.prototype

  var ret = Constructor.apply(obj, arguments)

  return typeof ret === 'object' ? ret : obj
}

function Otaku(name, age) {
  this.name = name
  this.age = age
  this.habit = 'Games'
}

Otaku.prototype.strength = 60

Otaku.prototype.sayYourName = function () {
  console.log('I am' + this.name)
}

var person = objectFactory(Otaku, 'Kevin', '18')

console.log(person)
