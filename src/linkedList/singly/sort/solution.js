const sort = linkedList => {
    const outputList = new LinkedList();
    const arr = nodeDatas(linkedList);
    arr.forEach(data => outputList.insert(new Node(data)));
    return outputList;
}

const nodeDatas = linkedList => {
    const arr = [];
    let curr = linkedList.head;

    while (curr) { 
        arr.push(curr.data);
        curr = curr.next;
    }

    return arr.sort((a, b) => a - b);
}