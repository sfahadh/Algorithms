const LinkedList = require("../../Starter/Singly/linkedList");
const Node = require("../../Starter/Singly/node");
const generate = require("../../Starter/Singly/generate");
const RemoveMid = require("./problem");

// Test Case 1:
test("Return a linked list with mid node of data 4 removed", () => {
    const inputList = generate.generateLinkedList(3, 5);
    const outputList = new LinkedList();

    outputList.insert(new Node(3));
    outputList.insert(new Node(5));

    expect(RemoveMid(inputList)).toEqual(outputList);
})

// Test Case 2:
test("Return a linked list with mid node of data 6 removed", () => {
    const inputList = generate.generateLinkedList(4, 7);
    const outputList = new LinkedList();

    outputList.insert(new Node(4));
    outputList.insert(new Node(5));
    outputList.insert(new Node(7));

    expect(RemoveMid(inputList)).toEqual(outputList);
})

// Test Case 3:
test("Return a linked list with mid node of data 3 removed", () => {
    const inputList = generate.generateLinkedList(1, 5);
    const outputList = new LinkedList();

    generate.addNodesToLinkedList(outputList, 1, 2);
    generate.addNodesToLinkedList(outputList, 4, 5);

    expect(RemoveMid(inputList)).toEqual(outputList);
})

// Test Case 4:
test("Return a linked list with mid node of data 10 removed", () => {
    const inputList = generate.generateLinkedList(5, 15);
    const outputList = new LinkedList();

    generate.addNodesToLinkedList(outputList, 5, 9);
    generate.addNodesToLinkedList(outputList, 11, 15);

    expect(RemoveMid(inputList)).toEqual(outputList);
})

// Test Case 5:
test("Return a linked list with mid node of data 9999 removed", () => {
    const inputList = generate.generateLinkedList(9990, 10008);
    const outputList = new LinkedList();

    generate.addNodesToLinkedList(outputList, 9990, 9998);
    generate.addNodesToLinkedList(outputList, 10000, 10008);

    expect(RemoveMid(inputList)).toEqual(outputList);
})