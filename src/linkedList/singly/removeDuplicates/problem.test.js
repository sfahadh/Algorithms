const LinkedList = require("../../Starter/Singly/linkedList");
const Node = require("../../Starter/Singly/node");
const generate = require("../../Starter/Singly/generate");
const RemoveDuplicates = require("./problem");

// Test Case 1:
test("Return a linked list with duplicate nodes of 3 and 5 removed", () => {
    const inputList = new LinkedList;
    const outputList = generate.generateLinkedList(3, 5);

    inputList.insert(new Node(3));
    inputList.insert(new Node(3));
    inputList.insert(new Node(3));
    inputList.insert(new Node(4));
    inputList.insert(new Node(5));
    inputList.insert(new Node(5));

    expect(RemoveDuplicates(inputList)).toEqual(outputList);
})

// Test Case 2:
test("Return a linked list with duplicate nodes of 6 removed", () => {
    const inputList = new LinkedList;
    const outputList = generate.generateLinkedList(6, 10);

    inputList.insert(new Node(6));
    generate.addNodesToLinkedList(inputList, 6, 10);

    expect(RemoveDuplicates(inputList)).toEqual(outputList);
})

// Test Case 3:
test("Return a linked list with duplicate nodes of 10 removed", () => {
    const inputList = new LinkedList;
    const outputList = generate.generateLinkedList(6, 10);

    generate.addNodesToLinkedList(inputList, 6, 10);
    inputList.insert(new Node(10));

    expect(RemoveDuplicates(inputList)).toEqual(outputList);
})

// Test Case 4:
test("Return original linked list", () => {
    const list = generate.generateLinkedList(56, 78);
    expect(RemoveDuplicates(list)).toEqual(list);
})

// Test Case 5:
test("Return a linked list with duplicates of 7 removed", () => {
    const inputList = new LinkedList;
    const outputList = generate.generateLinkedList(7, 7);

    inputList.insert(new Node(7));
    inputList.insert(new Node(7));
    inputList.insert(new Node(7));

    expect(RemoveDuplicates(inputList)).toEqual(outputList);
})

// Test Case 6:
test("Return a linked list with duplicates of 11, 12, 13, 14, and 15 removed", () => {
    const inputList = generate.generateLinkedList(11, 15);
    const outputList = generate.generateLinkedList(11, 15);

    generate.addNodesToLinkedList(inputList, 11, 15);

    expect(RemoveDuplicates(inputList)).toEqual(outputList);
})

// Test Case 7:
test("Return a linked list with duplicates of 18, 65 removed", () => {
    const inputList = new LinkedList;
    const outputList = new LinkedList;

    inputList.insert(new Node(32));
    inputList.insert(new Node(85));
    inputList.insert(new Node(18));
    inputList.insert(new Node(93));
    inputList.insert(new Node(65));
    inputList.insert(new Node(65));
    inputList.insert(new Node(90));
    inputList.insert(new Node(18));

    outputList.insert(new Node(32));
    outputList.insert(new Node(85));
    outputList.insert(new Node(18));
    outputList.insert(new Node(93));
    outputList.insert(new Node(65));
    outputList.insert(new Node(90));

    expect(RemoveDuplicates(inputList)).toEqual(outputList);
})

// Test Case 8:
test("Return a linked list with duplicates of 64 removed", () => {
    const inputList = new LinkedList;
    const outputList = new LinkedList;

    inputList.insert(new Node(64));
    inputList.insert(new Node(523));
    inputList.insert(new Node(64));

    outputList.insert(new Node(64));
    outputList.insert(new Node(523));

    expect(RemoveDuplicates(inputList)).toEqual(outputList);
})