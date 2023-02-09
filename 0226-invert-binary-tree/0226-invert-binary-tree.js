/**
27분
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
   /* if(!root) return [];
    const tree = [];
    const recursive = (node) => {
        if(!node)return;
        tree.push(node.val)
        const left = recursive(node.right);
        const right = recursive(node.left);
    }
    recursive(root);
    return tree; */
    const stack = [root];
    const result = [];    
    while(stack[0]){
        const poped = stack.shift();
       poped.right && stack.push(poped.right);
        poped.left && stack.push(poped.left);
        const temp = poped.right;
        poped.right = poped.left;
        poped.left = temp;
    };
    return root;
};