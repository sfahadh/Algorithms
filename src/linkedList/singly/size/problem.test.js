const LinkedList = require("../../Starter/Singly/linkedList");
const generate = require("../../Starter/Singly/generate");
const Size = require("./problem");

// Test Case 1:
test("Return 3 for the number of nodes in the linked list", () => {
    expect(Size(generate.generateLinkedList(3, 5))).toEqual(3);
})

// Test Case 2:
test("Return 0 for the number of nodes in the linked list", () => {
    expect(Size(new LinkedList)).toEqual(0);
})

// Test Case 3:
test("Return 64 for the number of nodes in the linked list", () => {
    expect(Size(generate.generateLinkedList(64, 127))).toEqual(64);
})

// Test Case 4:
test("Return 1 for the number of nodes in the linked list", () => {
    expect(Size(generate.generateLinkedList(1, 1))).toEqual(1);
})

// Test Case 5:
test("Return 6 for the number of nodes in the linked list", () => {
    expect(Size(generate.generateLinkedList(12, 17))).toEqual(6);
})