// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
* const LinkedList = require("../../Starter/Singly/linkedList");
* const Node = require("../../Starter/Singly/node");
*/

/*
TODO: Complete the following Linked List remove at problem below. There is are 2 inputs, 
TODO: which is the linkedlist and the index position in where you want to remove the node from. 
TODO: Remove the node and once that's done, return the Linked List.

function LinkedList() {
    this.head = null;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
*/


const removeAt = (head, index) => {
 
}

module.exports = removeAt;

/*
! Test Case 1:
Linked List = { 3 => { 4 => { 5 => null } } }
Input: (Linked List, 1)
Expected Output: { 3 => { 5 => null } } 

! Test Case 2:
Linked List = { 3 => { 4 => { 5 => { 6 => null } } } }
Input: (Linked List, 3)
Expected Output: { 3 => { 4 => { 5 => null } } } 
*/

/*
    ? If index is greater than the size of the linked list, return original linked list
*/