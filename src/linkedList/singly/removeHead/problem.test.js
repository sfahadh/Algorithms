const LinkedList = require("../../Starter/Singly/linkedList");
const generate = require("../../Starter/Singly/generate");
const RemoveHead = require("./problem");

// Test Case 1:
test("Return a linked list with head node of data 3 removed", () => {
    const inputList = generate.generateLinkedList(2, 4);
    const outputList = generate.generateLinkedList(3, 4);
    expect(RemoveHead(inputList)).toEqual(outputList);
})

// Test Case 2:
test("Return a linked list with head node of data 1 removed", () => {
    expect(RemoveHead(generate.generateLinkedList(1, 1))).toEqual(new LinkedList());
})

// Test Case 3:
test("Return a linked list with head node of data 9 removed", () => {
    const inputList = generate.generateLinkedList(9, 46);
    const outputList = generate.generateLinkedList(10, 46);
    expect(RemoveHead(inputList)).toEqual(outputList);
})

// Test Case 4:
test("Return a linked list with head node of data 66 removed", () => {
    const inputList = generate.generateLinkedList(66, 68);
    const outputList = generate.generateLinkedList(67, 68);
    expect(RemoveHead(inputList)).toEqual(outputList);
})

// Test Case 4:
test("Return a linked list with head node of data 100 removed", () => {
    const inputList = generate.generateLinkedList(100, 110);
    const outputList = generate.generateLinkedList(101, 110);
    expect(RemoveHead(inputList)).toEqual(outputList);
})