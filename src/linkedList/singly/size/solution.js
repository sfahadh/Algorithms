const size = linkedList => {
    let count = 0;
    let curr = linkedList.head;

    while (curr) {
        count++;
        curr = curr.next;
    }

    return count;
}