const reverse = linkedList => {
    let prev = null;
    let curr = linkedList.head;
    let next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}