function curry(fn, args) {
  var length = fn.length

  args = args || []

  return function () {
    var _args = args.slice(0)

    for (var i = 0; i < arguments.length; i++) {
      _args.push(arguments[i])
    }

    if (_args.length < length) {
      return curry(fn, _args)
    } else {
      return fn.apply(this, _args)
    }
  }
}

var fn = curry(function (a, b, c) {
  console.log([a, b, c])
})

fn('a', 'b', 'c')
fn('a', 'c')('d')
fn('a')('e')('f')
fn('a')('g')('h')
