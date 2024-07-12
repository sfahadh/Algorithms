const removeTail = linkedList => {
    let curr = linkedList.head;
    let prev = curr;
    let count = 0;
    while (curr) {  
        count++;
        if (!curr.next) prev.next = null;
        prev = curr;
        curr = curr.next;
    }

    if (count === 1) linkedList.head = null;
    return linkedList;
}