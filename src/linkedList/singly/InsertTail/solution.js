const insertTail = (linkedList, node) => {
    let currNode = linkedList.head;
    if (currNode) {
        while (currNode.next) { currNode = currNode.next }
        currNode.next = node;
    } else linkedList.head = node;
    
    return linkedList;
}