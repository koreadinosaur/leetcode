/**
50분
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  /*  const recursive = (node, val) => {
        if(!node) return 0;
        if(!node.left && !node.right) return node.val;
        if(recursive(node.left, node.val) + val === targetSum ||recursive(node.right, node.val) + val === targetSum) {
            return true;
        }
        return false;
    }
    return recursive(root, 0)*/
    const recursive = (node, val) => {
        if(!node)return 0;
        let sum = node.val + val;
        if(sum === targetSum && !node.left&&!node.right) return true;
        const left = recursive(node.left , sum);
        const right = recursive(node.right , sum);
        return left || right;
    }
    return recursive(root, 0)
};