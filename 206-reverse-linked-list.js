// Given the head of a singly linked list, reverse the list, and return the reversed list.
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
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let nextTemp = null;
    while (curr !== null) {
      // explaination: https://www.youtube.com/watch?v=O0By4Zq0OFc
      nextTemp = curr.next; // save the next
      curr.next = prev; // reverse the pointer
      prev = curr; // move prev to curr
      curr = nextTemp; // move curr to next
    }
    return prev; // prev is the new head
};