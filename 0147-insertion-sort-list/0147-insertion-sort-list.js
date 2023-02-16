/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 5시 15분
 */
var insertionSortList = function(head) {
    const arrayToList = (arr) =>{
        let head = new ListNode()
        head.val = arr[0]
        let headNode = head;
        for(let i = 1; i<arr.length ; i++){
            headNode.next = new ListNode(arr[i]);
            headNode = headNode.next
        }
        return head;
    }
    let headNode = head;
    let array = [];
    while(headNode){
        array.push(headNode.val);
        headNode = headNode.next;
    }
    array.sort((a,b)=>a-b);
    
    return arrayToList(array)
};