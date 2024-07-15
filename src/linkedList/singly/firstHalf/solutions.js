//? Solution #1
const solutionOne = head => {
    let length = linkedListLength(head);
    let mid = length % 2 === 0 ? Math.floor(length / 2) - 1 : Math.floor(length / 2);
    let count = 0;
    let curr = head;

    while (curr) {
        if (mid === count) {
            curr.next = null;
        }

        count++;
        curr = curr.next;
    }

    return head;
}

const linkedListLength = head => {
    let count = 0;
    let curr = head;

    while (curr) {
        count++;
        curr = curr.next;
    }

    return count;
}

//? Solution #2
const solutionTwo = head => {
    if (!head) return null
    let slow = head
    let fast = head.next

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next ? fast.next.next : fast.next
    }
    
    slow.next = null
    return head
}