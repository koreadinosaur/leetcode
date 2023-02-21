/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 10시 20분
 */
var sortedListToBST = function(head) {
    let array = [];
    let headNode = head;
    while(headNode){
        array.push(headNode.val);
        headNode = headNode.next;
    }
    const BST = (array) => {
        if(!array.length||!array) return null;
        let center = Math.floor(array.length/2);
        let node = new TreeNode(array[center]);
        node.left = BST(array.slice(0,center));
        node. right = BST(array.slice(center+1));
        return node;
    }
    return BST(array);
};