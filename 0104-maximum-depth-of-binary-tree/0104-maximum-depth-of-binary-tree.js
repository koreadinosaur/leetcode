/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) return 0;
    let countArray = [];
    const dfs = (node, count) => {
        if(node === null) return;
        countArray.push(count);        
        node.left && dfs(node.left, count+1);
        node.right && dfs(node.right, count+1);        
    }
    dfs(root,0)
    return Math.max(...countArray) + 1;
};