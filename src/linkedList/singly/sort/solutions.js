//? Solution #1
const sort = head => {
    const outputList = new LinkedList();
    const arr = nodeDatas(head);
    arr.forEach(data => outputList.insert(new Node(data)));
    return outputList.head;
}

const nodeDatas = head => {
    const list = []

    while (head) {
        list.push(head.data)
        head = head.next
    }

    return list.sort((a, b) => a - b)
}