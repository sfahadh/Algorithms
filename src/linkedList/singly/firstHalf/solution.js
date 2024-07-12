const firstHalf = linkedList => {
    let length = linkedListLength(linkedList);
    let mid = length % 2 === 0 ? Math.floor(length / 2) - 1 : Math.floor(length / 2);
    let count = 0;
    let curr = linkedList.head;

    while (curr) {
        if (mid === count) {
            curr.next = null;
        }
        count++;
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