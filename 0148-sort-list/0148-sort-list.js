/**
35분까지
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head) return null;
    let unSort = [];
    const recursive = (node) =>{
        if(!node) return;
        unSort.push(node);
        recursive(node.next);
    }
    recursive(head);
   unSort.sort((a,b)=> a.val-b.val);
    
    for(let i =0; i<unSort.length ; i++){
        if(i === unSort.length -1){
            unSort[unSort.length-1].next = null;
        }else{
            unSort[i].next = unSort[i+1];
        }

        
    }
    return unSort[0];
};