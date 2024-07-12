const insertTail = (linkedList, node) => {
    if (!linkedList.head && !linkedList.tail) {
        linkedList.head = node;
        linkedList.tail = node;
    } else {
        let tailNode = linkedList.tail;
        tailNode.next = node;
        node.prev = tailNode;
        linkedList.tail = node;
    }
    return linkedList;
}