// 基础版本

function myFlat(arr) {
  let res = []

  for (const value of arr) {
    if (Array.isArray(value)) {
      res = res.concat(myFlat(value))
    } else {
      res.push(value)
    }
  }

  return res
}

// reduce 实现

function myFlat2(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? myFlat2(cur) : cur)
  }, [])
}

// 栈实现

function myFlat3(arr) {
  const res = []
  const stack = [].concat(arr)

  while (stack.length) {
    const val = stack.pop()

    if (Array.isArray(val)) {
      stack.push(...val)
    } else {
      res.unshift(val)
    }
  }

  return res
}

const animals = ['🐷', ['🐶', '🐂'], ['🐎', ['🐑', ['🐲']], '🐛']]

console.log(myFlat(animals))
console.log(myFlat2(animals))
console.log(myFlat3(animals))
