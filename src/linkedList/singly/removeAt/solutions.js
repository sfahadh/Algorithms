//? Solution #1
const solutionOne = (head, index) => {
    if (index === 0) return head.next
    
    let curr = head;
    let prev = curr;
    let count = 0;

    while (curr) {
        if (count === index) {
            prev.next = curr.next;
            curr.next = null;
        }

        count++;
        prev = curr;
        curr = curr.next;
    }

    return head;
}

//? Solution #2
const solutionTwo = (head, index) => {
    if (!head) return null
    if (index === 0) return head.next

    let curr = head

    while (curr) {
        if (--index === 0) {
            if (curr.next) curr.next = curr.next.next
        }

        curr = curr.next
    }

    return head
}