//? Solution #1
const solutionOne = (head, node) => {
    let mid = Math.ceil(linkedListLength(head) / 2);
    let curr = head;

    while (curr) {
        if (mid === 1) {
            node.next = curr.next;
            curr.next = node;
            break;
        }

        curr = curr.next;
        mid--;
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
const solutionTwo = (head, node) => {
    let slow = head
    let fast = head.next

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    slow.next = node
    return head
}