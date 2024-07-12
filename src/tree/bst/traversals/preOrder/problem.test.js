const constructTree = require("../../Starter/ConstructTree");
const preOrder = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Return an array of values - [24, 17, 31, 34, 32, 39]", () => {
    const tree = constructTree(Structures["1"]);
    expect(preOrder(tree.root)).toEqual([24, 17, 31, 34, 32, 39]);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("Return an array of values - [10, 6, 15]", () => {
    const tree = constructTree(Structures["2"]);
    expect(preOrder(tree.root)).toEqual([10, 6, 15]);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("Return an array of values - [62, 123]", () => {
    const tree = constructTree(Structures["3"]);
    expect(preOrder(tree.root)).toEqual([62, 123]);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-4.png
test("Return an array of values - [62, 13]", () => {
    const tree = constructTree(Structures["4"]);
    expect(preOrder(tree.root)).toEqual([62, 13]);
});

// Test Case 5: //* Sample Image: refer to Images -> BST-structure-5.png
test("Return an array of values - [18, 5, 3, 0, 13, 65, 33]", () => {
    const tree = constructTree(Structures["5"]);
    expect(preOrder(tree.root)).toEqual([18, 5, 3, 0, 13, 65, 33]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("Return an array of values - [6, 4, 3, 5, 8, 7, 9]", () => {
    const tree = constructTree(Structures["6"]);
    expect(preOrder(tree.root)).toEqual([6, 4, 3, 5, 8, 7, 9]);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-7.png
test("Return an array of values - [33, 21, 17, 13, 12, 15, 23, 40, 36, 43, 51, 49, 55]", () => {
    const tree = constructTree(Structures["7"]);
    expect(preOrder(tree.root)).toEqual([33, 21, 17, 13, 12, 15, 23, 40, 36, 43, 51, 49, 55]);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-8.png
test("Return an array of values - [69, 36, 62, 51, 59, 53, 139, 77, 92, 83, 85]", () => {
    const tree = constructTree(Structures["8"]);
    expect(preOrder(tree.root)).toEqual([69, 36, 62, 51, 59, 53, 139, 77, 92, 83, 85]);
});

// Test Case 9: //* Sample Image: refer to Images -> BST-structure-9.png
test("Return an array of values - [55, 44, 33, 22, 11]", () => {
    const tree = constructTree(Structures["9"]);
    expect(preOrder(tree.root)).toEqual([55, 44, 33, 22, 11]);
});

// Test Case 10: //* Sample Image: refer to Images -> BST-structure-10.png
test("Return an array of values - [15, 12, 2, 19, 21]", () => {
    const tree = constructTree(Structures["10"]);
    expect(preOrder(tree.root)).toEqual([15, 12, 2, 19, 21]);
});

// Test Case 11: //* Sample Image: refer to Images -> BST-structure-11.png
test("Return an array of values - [25, 15, 5, 20, 30, 35, 45, 42, 47, 50, 69]", () => {
    const tree = constructTree(Structures["11"]);
    expect(preOrder(tree.root)).toEqual([25, 15, 5, 20, 30, 35, 45, 42, 47, 50, 69]);
});

// Test Case 12: //* Sample Image: refer to Images -> BST-structure-12.png
test("Return an array of values - [777, 555, 444, 666, 888, 999]", () => {
    const tree = constructTree(Structures["12"]);
    expect(preOrder(tree.root)).toEqual([777, 555, 444, 666, 888, 999]);
});

// Test Case 13: //* Sample Image: refer to Images -> BST-structure-13.png
test("Return an array of values - [52, 25, 6, 2, 1, 4, 34, 147, 99, 89, 123, 121, 125, 167]", () => {
    const tree = constructTree(Structures["13"]);
    expect(preOrder(tree.root)).toEqual([52, 25, 6, 2, 1, 4, 34, 147, 99, 89, 123, 121, 125, 167]);
});

// Test Case 14:
test("Return an array of value - [33]", () => {
    const tree = constructTree([33]);
    expect(preOrder(tree.root)).toEqual([33]);
});

// Test Case 15:
test("Return an empty array", () => {
    expect(preOrder(null)).toEqual([]);
});
