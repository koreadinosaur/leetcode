/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let array = [head];
    let nextNode = head?.next;
    while(nextNode) {
        if(array.indexOf(nextNode) !== -1) return true;        
        array.push(nextNode);
        nextNode = nextNode.next;
    }
    return false;
};

