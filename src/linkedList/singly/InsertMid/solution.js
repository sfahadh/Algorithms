const insertMid = (linkedList, node) => {
    let mid = Math.floor(linkedListLength(linkedList) / 2);
    let curr = linkedList.head;
    while (curr) {
        if (mid === 1) {
            node.next = curr.next;
            curr.next = node;
            break;
        }

        curr = curr.next;
        mid--;
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