/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummyNode=new ListNode(-1)
        let temp=dummyNode
        let t1=list1,t2=list2
        while(t1 && t2){
            if(t1.val < t2.val){
                temp.next=t1
                t1=t1.next
            }
            else{
                temp.next=t2
                t2=t2.next
            }
            temp=temp.next
        }
        if(t1){
            temp.next=t1
        }
        if(t2){
            temp.next=t2
        }
        return dummyNode.next
    }
}
