const mergeSorted = (linkedList1, linkedList2) => {
    const outputList = new LinkedList();
    const arr1 = nodeDatas(linkedList1);
    const arr2 = nodeDatas(linkedList2);
    const sorted = arr1.concat(arr2).sort((a, b) => a - b);

    sorted.forEach(data => outputList.insert(new Node(data)));
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