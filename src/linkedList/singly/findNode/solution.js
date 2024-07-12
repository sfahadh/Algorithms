const findNode = (linkedList, data) => {
    let curr = linkedList.head;
    
    while (curr) {
        if (curr.data === data) return true;
        curr = curr.next;
    }

    return false;
}