const LinkedList = require("../../Starter/Singly/linkedList");
const Node = require("../../Starter/Singly/node");
const generate = require("../../Starter/Singly/generate");
const InsertHead = require("./problem");

// Test Case 1:
test("Return a linked list with new node of data 3 as the head", () => {
    const inputList = generate.generateLinkedList(1, 2);
    const outputList = new LinkedList();

    const headNode = new Node(3);
    outputList.insert(headNode);
    generate.addNodesToLinkedList(outputList, 1, 2);

    expect(InsertHead(inputList, headNode)).toEqual(outputList);
})

// Test Case 2:
test("Return a linked list with new node of data 1 as the head", () => {
    const outputList = new LinkedList();

    const headNode = new Node(1);
    outputList.insert(headNode);

    expect(InsertHead(new LinkedList(), headNode)).toEqual(outputList);
})

// Test Case 3:
test("Return a linked list with new node of data 8 as the head", () => {
    const inputList = generate.generateLinkedList(1, 7);
    const outputList = new LinkedList();

    const headNode = new Node(8);
    outputList.insert(headNode);
    generate.addNodesToLinkedList(outputList, 1, 7);

    expect(InsertHead(inputList, headNode)).toEqual(outputList);
})

// Test Case 4:
test("Return a linked list with new node of data 1005 as the head", () => {
    const inputList = generate.generateLinkedList(432, 1002);
    const outputList = new LinkedList();

    const headNode = new Node(1005);
    outputList.insert(headNode);
    generate.addNodesToLinkedList(outputList, 432, 1002);

    expect(InsertHead(inputList, headNode)).toEqual(outputList);
})

// Test Case 5:
test("Return a linked list with new node of data 15 as the head", () => {
    const inputList = generate.generateLinkedList(14, 14);
    const outputList = new LinkedList();

    const headNode = new Node(15);
    outputList.insert(headNode);
    generate.addNodesToLinkedList(outputList, 14, 14);

    expect(InsertHead(inputList, headNode)).toEqual(outputList);
})