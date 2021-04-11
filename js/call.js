Function.prototype.call2 = function (context) {
  context = context || globalThis

  context.fn = this

  var args = []

  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')

  delete context.fn

  return result
}

// 测试一下

var foo = {
  value: 1,
}

function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}

bar.call2(foo, 'kevin', 18)
bar.call2(null)
