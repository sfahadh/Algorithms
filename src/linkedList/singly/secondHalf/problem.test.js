const generate = require("../../Starter/Singly/generate");
const SecondHalf = require("./problem");

// Test Case 1:
test("Return second half of linked list with datas of 4 - 5", () => {
    const inputList = generate.generateLinkedList(3, 5);
    const outputList = generate.generateLinkedList(4, 5);
    expect(SecondHalf(inputList)).toEqual(outputList.head);
})

// Test Case 2:
test("Return second half of linked list with only 1 node", () => {
    const inputList = generate.generateLinkedList(8, 9);
    const outputList = generate.generateLinkedList(9, 9);
    expect(SecondHalf(inputList)).toEqual(outputList.head);
})

// Test Case 3:
test("Return second half of linked list with datas of 62 - 70", () => {
    const inputList = generate.generateLinkedList(54, 70);
    const outputList = generate.generateLinkedList(62, 70);
    expect(SecondHalf(inputList)).toEqual(outputList.head);
})

// Test Case 4:
test("Return second half of linked list with datas of 5 - 6", () => {
    const inputList = generate.generateLinkedList(3, 6);
    const outputList = generate.generateLinkedList(5, 6);
    expect(SecondHalf(inputList)).toEqual(outputList.head);
})

// Test Case 5:
test("Return second half of linked list with datas of 6 - 10", () => {
    const inputList = generate.generateLinkedList(1, 10);
    const outputList = generate.generateLinkedList(6, 10);
    expect(SecondHalf(inputList)).toEqual(outputList.head);
})