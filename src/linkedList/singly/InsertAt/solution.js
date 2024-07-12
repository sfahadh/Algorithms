const insertAt = (linkedList, node, index) => {
    if (index === 0) {
        linkedList.head = node;
        return linkedList;
    }

    let curr = linkedList.head;
    let prev = curr;
    let count = 0;

    while (curr.next) {
        if (count === index) {
            node.next = prev.next;
            prev.next = node;
            return linkedList;
        }

        prev = curr;
        curr = curr.next;
        count++;
    }

    if (count === index) curr.next = node;
    return linkedList;
}