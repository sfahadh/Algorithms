const generate = require("../../Starter/Singly/generate");
const SecondHalf = require("./problem");

// Test Case 1:
test("Return first half of linked list with datas of 3 - 4", () => {
    const inputList = generate.generateLinkedList(3, 5);
    const outputList = generate.generateLinkedList(3, 4);
    expect(SecondHalf(inputList)).toEqual(outputList);
})

// Test Case 2:
test("Return first half of linked list with only 1 node", () => {
    const inputList = generate.generateLinkedList(8, 9);
    const outputList = generate.generateLinkedList(8, 8);
    expect(SecondHalf(inputList)).toEqual(outputList);
})

// Test Case 3:
test("Return second half of linked list with datas of 54 - 62", () => {
    const inputList = generate.generateLinkedList(54, 70);
    const outputList = generate.generateLinkedList(54, 62);
    expect(SecondHalf(inputList)).toEqual(outputList);
})

// Test Case 4:
test("Return second half of linked list with datas of 3 - 4", () => {
    const inputList = generate.generateLinkedList(3, 6);
    const outputList = generate.generateLinkedList(3, 4);
    expect(SecondHalf(inputList)).toEqual(outputList);
})

// Test Case 5:
test("Return second half of linked list with datas of 6 - 10", () => {
    const inputList = generate.generateLinkedList(1, 10);
    const outputList = generate.generateLinkedList(1, 5);
    expect(SecondHalf(inputList)).toEqual(outputList);
})