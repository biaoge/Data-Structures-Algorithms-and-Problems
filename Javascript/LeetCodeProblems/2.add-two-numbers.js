/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (29.53%)
 * Total Accepted:    654.3K
 * Total Submissions: 2.2M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Explaination: 多考虑corner case!!!
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l1 = new ListNode(9);
var l2 = new ListNode(1);
l1.next = new ListNode(8);


var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let node = dummy;
    let carry = 0;
    while(l1 !== null && l2 !== null) {
        let sum = l1.val + l2.val + carry;
        carry = Math.floor(sum / 10);
        node.next = new ListNode(sum % 10);
        l1 = l1.next;
        l2 = l2.next;
        node = node.next;
    }
    
    while(l1 !== null) {
        let sum = l1.val + carry;
        carry = Math.floor(sum / 10);
        node.next = new ListNode(sum % 10);
        l1 = l1.next;
        node = node .next;
    }
    while(l2 !== null) {
        let sum = l2.val + carry;
        carry = Math.floor(sum / 10);
        node.next = new ListNode(sum % 10);
        l2 = l2.next;
        node = node .next;
    }
    
    if(carry !== 0) {
        node.next = new ListNode(carry);
    }
    
    return dummy.next;
};
