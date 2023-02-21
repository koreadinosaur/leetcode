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
 * @return {boolean}
 */

var isSymmetric = function(root) {
    /* 너비우선 탐색, 1depth 마다 좌측과 오른쪽을 비교한다.
    */
const bfs = (left, right) => {
    if(!left && !right) return true;
    if(left?.val !== right?.val) return false;
    return bfs(left.left,right.right) && bfs(left.right,right.left)
}
return bfs(root,root);
};