const generate = require("../../Starter/Singly/generate");
const FindNode = require("./problem");

// Test Case 1:
test("Node data 4 found, return true", () => {
    expect(FindNode(generate.generateLinkedList(3, 5), 4)).toEqual(true);
})

// Test Case 2:
test("Node data 23 found, return true", () => {
    expect(FindNode(generate.generateLinkedList(16, 55), 23)).toEqual(true);
})

// Test Case 3:
test("Node data 6 is not found, return false", () => {
    expect(FindNode(generate.generateLinkedList(8, 15), 6)).toEqual(false);
})

// Test Case 4:
test("Node data 76 is not found, return false", () => {
    expect(FindNode(generate.generateLinkedList(57, 75), 76)).toEqual(false);
})

// Test Case 5:
test("Node data 0 found, return true", () => {
    expect(FindNode(generate.generateLinkedList(0, 5), 0)).toEqual(true);
})

// Test Case 6:
test("Node data 10 found, return true", () => {
    expect(FindNode(generate.generateLinkedList(1, 10), 10)).toEqual(true);
})