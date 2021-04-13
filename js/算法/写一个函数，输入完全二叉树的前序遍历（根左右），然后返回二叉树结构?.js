// 写一个函数，输入完全二叉树的前序遍历（根左右），然后返回二叉树结构。
// 比如下面这个二叉树：
//     1
//   2   3
//  4 5 6
// 前序遍历是 [1, 2, 4, 5, 3, 6]
// 返回示例：{ value: 1, left: { ... }, right: { ... } }
function foo(preOrder) {
  if (!preOrder.length) {
    return null
  }

  var rootVal = preOrder[0]
  var node = new TreeNode(rootVal)

  var k = -1
  var ans = 0

  while (ans < preOrder.length) {
    k++
    ans += Math.pow(2, k)
  }

  var left = 0

  while (k) {
    k--
    left += Math.pow(2, k)
  }

  node.left = foo(preOrder.slice(1, left + 1))
  node.right = foo(preOrder.slice(left + 1))

  return node
}

function TreeNode(value) {
  this.value = value
  this.left = this.right = null
}

console.log(foo([1, 2, 4, 5, 3]))
console.log(foo([1, 2, 4, 5, 3, 6]))
