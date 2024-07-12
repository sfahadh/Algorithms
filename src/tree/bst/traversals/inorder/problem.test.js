const constructTree = require("../../Starter/ConstructTree");
const inOrder = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Return an array of values - [17, 24, 31, 32, 34, 39]", () => {
    const tree = constructTree(Structures["1"]);
    expect(inOrder(tree.root)).toEqual([17, 24, 31, 32, 34, 39]);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("Return an array of values - [6, 10, 15]", () => {
    const tree = constructTree(Structures["2"]);
    expect(inOrder(tree.root)).toEqual([6, 10, 15]);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("Return an array of values - [62, 123]", () => {
    const tree = constructTree(Structures["3"]);
    expect(inOrder(tree.root)).toEqual([62, 123]);
});

// Test Case 4:  //* Sample Image: refer to Images -> BST-structure-4.png
test("Return an array of values - [13, 62]", () => {
    const tree = constructTree(Structures["4"]);
    expect(inOrder(tree.root)).toEqual([13, 62]);
});

// Test Case 5: //* Sample Image: refer to Images -> BST-structure-5.png
test("Return an array of values - [0, 3, 5, 13, 18, 33, 65]", () => {
    const tree = constructTree(Structures["5"]);
    expect(inOrder(tree.root)).toEqual([0, 3, 5, 13, 18, 33, 65]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("Return an array of values - [3, 4, 5, 6, 7, 8, 9]", () => {
    const tree = constructTree(Structures["6"]);
    expect(inOrder(tree.root)).toEqual([3, 4, 5, 6, 7, 8, 9]);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-7.png
test("Return an array of values - [12, 13, 15, 17, 21, 23, 33, 36, 40, 43, 49, 51, 55]", () => {
    const tree = constructTree(Structures["7"]);
    expect(inOrder(tree.root)).toEqual([12, 13, 15, 17, 21, 23, 33, 36, 40, 43, 49, 51, 55]);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-8.png
test("Return an array of values - [36, 51, 53, 59, 62, 69, 77, 83, 85, 92, 139]", () => {
    const tree = constructTree(Structures["8"]);
    expect(inOrder(tree.root)).toEqual([36, 51, 53, 59, 62, 69, 77, 83, 85, 92, 139]);
});

// Test Case 9: //* Sample Image: refer to Images -> BST-structure-9.png
test("Return an array of values - [11, 22, 33, 44, 55]", () => {
    const tree = constructTree(Structures["9"]);
    expect(inOrder(tree.root)).toEqual([11, 22, 33, 44, 55]);
});

// Test Case 10: //* Sample Image: refer to Images -> BST-structure-10.png
test("Return an array of values - [2, 12, 15, 19, 21]", () => {
    const tree = constructTree(Structures["10"]);
    expect(inOrder(tree.root)).toEqual([2, 12, 15, 19, 21]);
});

// Test Case 11: //* Sample Image: refer to Images -> BST-structure-11.png
test("Return an array of values - [5, 15, 20, 25, 30, 35, 42, 45, 47, 50, 69]", () => {
    const tree = constructTree(Structures["11"]);
    expect(inOrder(tree.root)).toEqual([5, 15, 20, 25, 30, 35, 42, 45, 47, 50, 69]);
});

// Test Case 12: //* Sample Image: refer to Images -> BST-structure-12.png
test("Return an array of values - [444, 555, 666, 777, 888, 999]", () => {
    const tree = constructTree(Structures["12"]);
    expect(inOrder(tree.root)).toEqual([444, 555, 666, 777, 888, 999]);
});

// Test Case 13: //* Sample Image: refer to Images -> BST-structure-13.png
test("Return an array of values - [1, 2, 4, 6, 25, 34, 52, 89, 99, 121, 123, 125, 147, 167]", () => {
    const tree = constructTree(Structures["13"]);
    expect(inOrder(tree.root)).toEqual([1, 2, 4, 6, 25, 34, 52, 89, 99, 121, 123, 125, 147, 167]);
});

// Test Case 14:
test("Return an array of value - [33]", () => {
    const tree = constructTree([33]);
    expect(inOrder(tree.root)).toEqual([33]);
});
