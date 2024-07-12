const removeAt = (linkedList, index) => {
    if (index === 0) {
        linkedList.head = linkedList.head.next;
        return linkedList;
    }
    let curr = linkedList.head;
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

    return linkedList;
}