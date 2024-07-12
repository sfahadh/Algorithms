const getAllNodes = linkedList => {
    const result = [];
    let curr = linkedList.head;
    
    while (curr) {
        result.push(curr.data);
        curr = curr.next;
    }

    return result;
}