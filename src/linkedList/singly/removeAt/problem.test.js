const LinkedList = require("../../starter/singly/linkedList");
const Node = require("../../starter/singly/node");
const generate = require("../../starter/singly/generate");
const RemoveAt = require("./problem");

// Test Case 1:
test("Return a linked list with the node of data 4 at index 1 removed", () => {
    const inputList = generate.generateLinkedList(3, 5);
    const outputList = new LinkedList;

    outputList.insert(new Node(3));
    outputList.insert(new Node(5));

    expect(RemoveAt(inputList.head, 1)).toEqual(outputList.head);
})

// Test Case 2:
test("Return a linked list with the node of data 6 at index 3 removed", () => {
    const inputList = generate.generateLinkedList(3, 6);
    const outputList = generate.generateLinkedList(3, 5);
    expect(RemoveAt(inputList.head, 3)).toEqual(outputList.head);
})

// Test Case 3:
test("Return a linked list with the node of data 1 at index 0 removed", () => {
    const inputList = generate.generateLinkedList(1, 3);
    const outputList = generate.generateLinkedList(2, 3);
    expect(RemoveAt(inputList.head, 0)).toEqual(outputList.head);
})

// Test Case 4:
test("Return a linked list with the node of data 45 at index 7 removed", () => {
    const inputList = generate.generateLinkedList(38, 73);
    const outputList = generate.generateLinkedList(38, 44);

    generate.addNodesToLinkedList(outputList, 46, 73)

    expect(RemoveAt(inputList.head, 7)).toEqual(outputList.head);
})

// Test Case 5:
test("Index out of bound, return original linked list", () => {
    const list = generate.generateLinkedList(12, 26);
    expect(RemoveAt(list.head, 32)).toEqual(list.head);
})

// Test Case 6:
test("Index slightly out of bound, return original linked list", () => {
    const list = generate.generateLinkedList(0, 22);
    expect(RemoveAt(list.head, 23)).toEqual(list.head);
})

// Test Case 7:
test("Return a linked list with the node of data 4 at index 3 removed", () => {
    const inputList = generate.generateLinkedList(1, 4);
    const outputList = generate.generateLinkedList(1, 3);
    expect(RemoveAt(inputList.head, 3)).toEqual(outputList.head);
})

// Test Case 8:
test("Return a linked list with the node of data 99 at index 15 removed", () => {
    const inputList = generate.generateLinkedList(84, 100);
    const outputList = generate.generateLinkedList(84, 98);

    outputList.insert(new Node(100))

    expect(RemoveAt(inputList.head, 15)).toEqual(outputList.head);
})