const LinkedList = require("../../starter/singly/linkedList");
const generate = require("../../starter/singly/generate");
const Size = require("./problem");

// Test Case 1:
test("Return 3 for the number of nodes in the linked list", () => {
    const inputList = generate.generateLinkedList(3, 5)
    expect(Size(inputList.head)).toEqual(3);
})

// Test Case 2:
test("Return 0 for the number of nodes in the linked list", () => {
    const inputList = new LinkedList
    expect(Size(inputList.head)).toEqual(0);
})

// Test Case 3:
test("Return 64 for the number of nodes in the linked list", () => {
    const inputList = generate.generateLinkedList(64, 127)
    expect(Size(inputList.head)).toEqual(64);
})

// Test Case 4:
test("Return 1 for the number of nodes in the linked list", () => {
    const inputList = generate.generateLinkedList(1, 1)
    expect(Size(inputList.head)).toEqual(1);
})

// Test Case 5:
test("Return 6 for the number of nodes in the linked list", () => {
    const inputList = generate.generateLinkedList(12, 17)
    expect(Size(inputList.head)).toEqual(6);
})