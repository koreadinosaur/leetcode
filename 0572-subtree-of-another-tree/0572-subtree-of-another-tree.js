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
 * @param {TreeNode} subRoot
 * @return {boolean}
 50분
 */
var isSubtree = function(root, subRoot) {
    
    
    const dfs = (node,subNode) =>{
        if(!node&&!subNode) return true;
        if(!node || !subNode) return false;
        if(node.val !== subNode.val) return false;
    return dfs(node.left,subNode.left)&& dfs(node.right,subNode.right)
    }
    if(root === null) return false;
    if(root.val===subRoot.val && dfs(root,subRoot)) return true;
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};