const LinkedList = require("./linkedList");
const Node = require("./node");

const generateLinkedList = (start, end) => {
    const linkedList = new LinkedList();
    for (let i = start; i <= end; i++) {
        linkedList.insert(new Node(i))
    }
    return linkedList;
}

const addNodesToLinkedList = (linkedList, start, end) => {
    for (let i = start; i <= end; i++) {
        linkedList.insert(new Node(i))
    }
    return linkedList;
}

module.exports = {
    generateLinkedList: generateLinkedList,
    addNodesToLinkedList: addNodesToLinkedList
}