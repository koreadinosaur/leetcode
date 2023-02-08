/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let treeP = [];
    let treeQ = [];
    const recursive = (node, array) => {
        if(node === null) return;
        array.push(node.val);
        node.left ? recursive(node.left,array) : array.push(null);
        node.right ? recursive(node.right, array) : array.push(null);
    }
    recursive(p,treeP);
    recursive(q,treeQ);
    if(treeP.length !== treeQ.length) return false
    for(let i = 0 ; i<treeP.length ; i++){
        if(treeP[i] !== treeQ[i]) return false;
    }
    return true;
};