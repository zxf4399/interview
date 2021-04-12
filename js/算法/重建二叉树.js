/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 前序遍历：[根节点，左子数的前序遍历，右子树的前序遍历]
  // 中序遍历：[左子树的中序遍历, 根节点, 右子树的中序遍历]

  if (!preorder.length || !inorder.length) {
    return null
  }

  var rootVal = preorder[0]
  var node = new TreeNode(rootVal)

  for (var i = 0, len = inorder.length; i < len; i++) {
    if (inorder[i] === rootVal) {
      break
    }
  }

  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))

  return node
}
