const LinkedList = require("../../Starter/Singly/linkedList");
const generate = require("../../Starter/Singly/generate");
const RemoveTail = require("./problem");

// Test Case 1:
test("Return a linked list with tail node of data 5 removed", () => {
    const inputList = generate.generateLinkedList(2, 5);
    const outputList = generate.generateLinkedList(2, 4);
    expect(RemoveTail(inputList)).toEqual(outputList);
})

// Test Case 2:
test("Return a linked list with tail node of data 1 removed", () => {
    expect(RemoveTail(generate.generateLinkedList(1, 1))).toEqual(new LinkedList());
})

// Test Case 3:
test("Return a linked list with tail node of data 10 removed", () => {
    const inputList = generate.generateLinkedList(6, 10);
    const outputList = generate.generateLinkedList(6, 9);
    expect(RemoveTail(inputList)).toEqual(outputList);
})

// Test Case 4:
test("Return a linked list with tail node of data 33 removed", () => {
    const inputList = generate.generateLinkedList(12, 33);
    const outputList = generate.generateLinkedList(12, 32);
    expect(RemoveTail(inputList)).toEqual(outputList);
})

// Test Case 2:
test("Return empty linked list", () => {
    expect(RemoveTail(new LinkedList())).toEqual(new LinkedList());
})