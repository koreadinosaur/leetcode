/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 //10시 5분
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    let sum = 0;
    const dfs = (node) =>{
        if(!node) return 0;
         let left = dfs(node.left);
        let right = dfs(node.right);
        sum += Math.abs(left-right);
        return node.val + left + right
    };
    dfs(root);
    return sum
};