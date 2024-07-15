// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
* const LinkedList = require("../../Starter/Singly/linkedList");
* const Node = require("../../Starter/Singly/node");
*/

/*
TODO: Complete the following Linked List merge sorted problem below. There are 2 inputs, 
TODO: both being two sorted Linked Lists. The goal is to combine the two sorted 
TODO: Linked Lists into 1 sorted Linked List.

function LinkedList() {
    this.head = null;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
*/

const mergeSorted = (head1, head2) => {
    if (!head1 || !head2) return head1 || head2 || null
    let curr = head1

    while (curr && head2) {
        if (curr.data < head2.data) {
            let temp = curr.next
            curr.next = head2
            curr.next.next = temp
            curr = temp
        } else {
            let temp = head2.next
            head2.next = curr
            head2.next.next = temp
            head2 = temp
        }
    }

    return head1
}

module.exports = mergeSorted;

/*
! Test Case:
Linked List 1 = { 24 => { 42 => null } }
Linked List 2 = { 3 => { 29 => null } } 
Expected Output: { 3 => { 24 => { 29 => { 42 => null } } } }


curr { 24 => { 42 => null } }
head2 { 3 => { 29 => null } } 

step 1:
temp = head2.next
head2.next = curr
head2.next.next = temp
head2 = temp
3 => 24 => 29

step 2:
temp = curr.next
curr.next = head2
curr.next.next = temp
curr = temp
3 => 24 => 
*/
