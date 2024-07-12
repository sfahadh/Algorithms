const removeMid = linkedList => {
    const mid = Math.floor(linkedListLength(linkedList) / 2);
    let count = 0;
    let curr = linkedList.head;
    let prev = curr;

    while (curr) {
        if (count === mid) {
            prev.next = curr.next;
            curr.next = null;
            break;
        }

        count++;
        prev = curr;
        curr = curr.next;
    }

    return linkedList;
}

const linkedListLength = linkedList => {
    let count = 0;
    let curr = linkedList.head;

    while (curr) {
        count++;
        curr = curr.next;
    }

    return count;
}