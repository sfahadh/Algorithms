const generate = require("../../starter/singly/generate");
const GetAllNodes = require("./problem");

// Test Case 1:
test("Return an array of [3, 4, 5]", () => {
    const inputList = generate.generateLinkedList(3, 5)
    const result = [3, 4, 5];
    expect(GetAllNodes(inputList.head)).toEqual(result);
})

// Test Case 2:
test("Return an array of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    const inputList = generate.generateLinkedList(1, 10)
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(GetAllNodes(inputList.head)).toEqual(result);
})

// Test Case 3:
test("Return an array of [33, 34, 35, 36]", () => {
    const inputList = generate.generateLinkedList(33, 36);
    const result = [33, 34, 35, 36];
    expect(GetAllNodes(inputList.head)).toEqual(result);
})

// Test Case 4:
test("Return an array of [7, 8, 9]", () => {
    const inputList = generate.generateLinkedList(7, 9);
    const result = [7, 8, 9];
    expect(GetAllNodes(inputList.head)).toEqual(result);
})