Function.prototype.bind2 = function (context) {
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments)

    return self.apply(
      // 通过 new 操作符生成实例
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    )
  }

  var fNop = function () {}

  fNop.prototype = this.prototype
  fBound.prototype = new fNop()

  return fBound
}

var foo = {
  value: 1,
}

function bar(name, age) {
  console.log(this.value)
  console.log(name)
  console.log(age)
}

var bindFoo = bar.bind2(foo, 'daisy')
bindFoo('18')
