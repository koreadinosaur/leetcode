/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 11시 10분
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    const dfs = (node, min, max) => {
        if(!node) return true;
        if(node.val >= max || node.val <= min) return false;
         return dfs(node.left, min, node.val) && dfs(node.right, node.val,max);        
    }
    
   return dfs(root,-Infinity,Infinity)
};