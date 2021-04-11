Function.prototype.apply2 = function (context, arr) {
  context = context || globalThis
  context.fn = this

  var result

  if (!arr) {
    result = context.fn()
  } else {
    var args = []

    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }

    result = eval('context.fn(' + args + ')')
  }

  delete context.fn

  return result
}

var value = 2

var obj = {
  value: 1,
}

function bar(name, age) {
  console.log(this.value)
  return {
    value: this.value,
    name: name,
    age: age,
  }
}

bar.apply2(null)

console.log(bar.apply2(obj, 'kevin', 18))
