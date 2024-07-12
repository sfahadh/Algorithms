const LinkedList = require("../../Starter/Singly/linkedList");
const Node = require("../../Starter/Singly/node");
const generate = require("../../Starter/Singly/generate");
const Reverse = require("./problem");

// Test Case 1:
test("Return a linked list where nodes traverse from 6 to 3", () => {
    const inputList = generate.generateLinkedList(3, 6);
    const outputList = new LinkedList();

    outputList.insert(new Node(6));
    outputList.insert(new Node(5));
    outputList.insert(new Node(4));
    outputList.insert(new Node(3));

    expect(Reverse(inputList)).toEqual(outputList.head);
})

// Test Case 2:
test("Return a linked list where nodes traverse from 41 to 32", () => {
    const inputList = generate.generateLinkedList(32, 41);
    const outputList = new LinkedList();

    outputList.insert(new Node(41));
    outputList.insert(new Node(40));
    outputList.insert(new Node(39));
    outputList.insert(new Node(38));
    outputList.insert(new Node(37));
    outputList.insert(new Node(36));
    outputList.insert(new Node(35));
    outputList.insert(new Node(34));
    outputList.insert(new Node(33));
    outputList.insert(new Node(32));

    expect(Reverse(inputList)).toEqual(outputList.head);
})

// Test Case 3:
test("Return original linked list", () => {
    const inputList = generate.generateLinkedList(1, 1);
    const outputList = new LinkedList();

    outputList.insert(new Node(1));

    expect(Reverse(inputList)).toEqual(outputList.head);
})

// Test Case 4:
test("Return a linked list where nodes traverse from 12 to 13", () => {
    const inputList = generate.generateLinkedList(12, 13);
    const outputList = new LinkedList();

    outputList.insert(new Node(13));
    outputList.insert(new Node(12));

    expect(Reverse(inputList)).toEqual(outputList.head);
})

// Test Case 5:
test("Return a linked list where nodes traverse from 5 to 0", () => {
    const inputList = generate.generateLinkedList(0, 5);
    const outputList = new LinkedList();

    outputList.insert(new Node(5));
    outputList.insert(new Node(4));
    outputList.insert(new Node(3));
    outputList.insert(new Node(2));
    outputList.insert(new Node(1));
    outputList.insert(new Node(0));

    expect(Reverse(inputList)).toEqual(outputList.head);
})