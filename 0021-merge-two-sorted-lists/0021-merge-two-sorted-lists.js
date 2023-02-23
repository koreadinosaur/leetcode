/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2)return null;
    let firstHead = list1;
    let secondHead = list2;
    let arr1 =[];
    let arr2 = [];
    while(firstHead || secondHead){
        firstHead && arr1.push(firstHead.val);
        secondHead && arr2.push(secondHead.val);
       if(firstHead) firstHead = firstHead.next;
       if(secondHead) secondHead = secondHead.next;
       
    }
    let concated = arr1.concat(arr2).sort((a,b)=>a-b);
    let newNode = new ListNode(concated[0]);
    let node = newNode;
    for(let i =1;i<concated.length; i++){
        node.next = new ListNode(concated[i]);
        node = node.next
    }
    return newNode
    
};