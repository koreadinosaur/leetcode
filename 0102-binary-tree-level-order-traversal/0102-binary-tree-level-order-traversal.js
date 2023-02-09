/**
30분
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let result = [];
    const stack = [root];
    /*const recursive = (node) => {
        if(!node || !node?.left && !node?.right) return;
        const values = [];
        node.left && values.push(node.left.val);
        node.right && values.push(node.right.val);
        result.push(values);
        recursive(node.left);
        recursive(node.right);
    }
    recursive(root)
    return result;*/
    /*while(stack[0]){
        const poped = stack.shift();
        const values = [];
        poped.left && values.push(poped.left.val);
        poped.right && values.push(poped.right.val);
        poped.left&&stack.push(poped.left);
        poped.right&&stack.push(poped.right);
        values.length && result.push(values);
            }
    return result; */
    
    const recursive = (node, depth) =>{
        if(!node) return;
        result[depth] = result[depth] ? [...result[depth],node.val] : [node.val]
        recursive(node.left,depth+1);
        recursive(node.right,depth+1);
    }
    recursive(root,0);
    return result;
};