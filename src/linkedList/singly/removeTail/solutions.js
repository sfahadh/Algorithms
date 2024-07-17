//? Solution #1
const solutionOne = linkedList => {
    let curr = linkedList.head;
    let prev = curr;
    let count = 0;
    
    while (curr) {  
        count++;
        if (!curr.next) prev.next = null;
        prev = curr;
        curr = curr.next;
    }

    if (count === 1) linkedList.head = null;
    return linkedList;
}

//? Solution #2
const solutionTwo = head => {
    if (!head || !head.next) return null
    let curr = head

    while (curr && curr.next) {
        if (!curr.next.next) curr.next = curr.next.next
        curr = curr.next
    }

    return head
}