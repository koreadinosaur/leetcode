/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 35분
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    let max = 1;
    const dfs = (node, depth) => {
        if(!node && depth -1 > max) max = depth -1; 
        if(node.children.length >0){
            for(let i =0; i<node.children.length ; i++){
              dfs(node.children[i],depth+1);
            }
        }else {
            if(depth>max) max = depth; 
        }
    }
    dfs(root,1);
    return max;
};