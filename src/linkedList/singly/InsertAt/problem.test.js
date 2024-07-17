const LinkedList = require("../../starter/singly/linkedList");
const Node = require("../../starter/singly/node");
const generate = require("../../starter/singly/generate");
const InsertAt = require("./problem");

// Test Case 1:
test("Return a linked list with node of data 52 in index position 1", () => {
    const inputList = generate.generateLinkedList(3, 5);
    const outputList = new LinkedList();

    const node = new Node(52);
    outputList.insert(new Node(3));
    outputList.insert(node);
    outputList.insert(new Node(4));
    outputList.insert(new Node(5));

    expect(InsertAt(inputList.head, node, 1)).toEqual(outputList.head);
})

// Test Case 2:
test("Return a linked list with node of data 3 in index position 0", () => {
    const inputList = generate.generateLinkedList(10, 13);
    const outputList = new LinkedList();

    const node = new Node(3);
    outputList.insert(node);
    generate.addNodesToLinkedList(outputList, 10, 13);

    expect(InsertAt(inputList.head, node, 0)).toEqual(outputList.head);
})

// Test Case 3:
test("Return original linked list - Part 1", () => {
    const inputList = generate.generateLinkedList(3, 8);
    expect(InsertAt(inputList.head, new Node(5), 12)).toEqual(inputList.head);
})

// Test Case 4:
test("Return original linked list - Part 2", () => {
    const inputList = generate.generateLinkedList(12, 17);
    expect(InsertAt(inputList.head, new Node(5), 2)).toEqual(inputList.head);
})

// Test Case 5:
test("Return a linked list with node of data 3 in index position 3", () => {
    const inputList = generate.generateLinkedList(6, 15);
    const outputList = new LinkedList();

    const node = new Node(3);
    generate.addNodesToLinkedList(outputList, 6, 8);
    outputList.insert(node);
    generate.addNodesToLinkedList(outputList, 9, 15);

    expect(InsertAt(inputList.head, node, 3)).toEqual(outputList.head);
})

// Test Case 6:
test("Return original linked list - Part 3", () => {
    const inputList = generate.generateLinkedList(4, 5);
    expect(InsertAt(inputList.head, new Node(3), 3)).toEqual(inputList.head);
})

// Test Case 7:
test("Return a linked list with node of data 9999 in index position 1", () => {
    const inputList = generate.generateLinkedList(43, 50);
    const outputList = new LinkedList();

    const node = new Node(9999);
    outputList.insert(new Node(43));
    outputList.insert(node);
    generate.addNodesToLinkedList(outputList, 44, 50);

    expect(InsertAt(inputList.head, node, 1)).toEqual(outputList.head);
})

// Test Case 8:
test("Return a linked list with node of data 42 in index position 4", () => {
    const inputList = generate.generateLinkedList(21, 23);
    const outputList = new LinkedList();

    const node = new Node(42);
    generate.addNodesToLinkedList(outputList, 21, 23);
    outputList.insert(node);

    expect(InsertAt(inputList.head, node, 4)).toEqual(outputList.head);
})

// Test Case 9:
test("Return original linked list - Part 4", () => {
    const inputList = generate.generateLinkedList(1, 4);
    expect(InsertAt(inputList.head, new Node(14), 5)).toEqual(inputList.head);
})