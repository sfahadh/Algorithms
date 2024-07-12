const constructTree = require("../../Starter/ConstructTree");
const levelOrder = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Return an array of values - [24, 17, 31, 34, 32, 39]", () => {
    const tree = constructTree(Structures["1"]);
    expect(levelOrder(tree.root)).toEqual([24, 17, 31, 34, 32, 39]);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("Return an array of values - [10, 6, 15]", () => {
    const tree = constructTree(Structures["2"]);
    expect(levelOrder(tree.root)).toEqual([10, 6, 15]);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("Return an array of values - [62, 123]", () => {
    const tree = constructTree(Structures["3"]);
    expect(levelOrder(tree.root)).toEqual([62, 123]);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-4.png
test("Return an array of values - [62, 13]", () => {
    const tree = constructTree(Structures["4"]);
    expect(levelOrder(tree.root)).toEqual([62, 13]);
});

// Test Case 5: //* Sample Image: refer to Images -> BST-structure-5.png
test("Return an array of values - [18, 5, 65, 3, 13, 33, 0]", () => {
    const tree = constructTree(Structures["5"]);
    expect(levelOrder(tree.root)).toEqual([18, 5, 65, 3, 13, 33, 0]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("Return an array of values - [6, 4, 8, 3, 5, 7, 9]", () => {
    const tree = constructTree(Structures["6"]);
    expect(levelOrder(tree.root)).toEqual([6, 4, 8, 3, 5, 7, 9]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("Return an array of values - [6, 4, 8, 3, 5, 7, 9]", () => {
    const tree = constructTree(Structures["6"]);
    expect(levelOrder(tree.root)).toEqual([6, 4, 8, 3, 5, 7, 9]);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-7.png
test("Return an array of values - [33, 21, 40, 17, 23, 36, 43, 13, 51, 12, 15, 49, 55]", () => {
    const tree = constructTree(Structures["7"]);
    expect(levelOrder(tree.root)).toEqual([33, 21, 40, 17, 23, 36, 43, 13, 51, 12, 15, 49, 55]);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-8.png
test("Return an array of values - [69, 36, 139, 62, 77, 51, 92, 59, 83, 53, 85]", () => {
    const tree = constructTree(Structures["8"]);
    expect(levelOrder(tree.root)).toEqual([69, 36, 139, 62, 77, 51, 92, 59, 83, 53, 85]);
});

// Test Case 9: //* Sample Image: refer to Images -> BST-structure-9.png
test("Return an array of values - [55, 44, 33, 22, 11]", () => {
    const tree = constructTree(Structures["9"]);
    expect(levelOrder(tree.root)).toEqual([55, 44, 33, 22, 11]);
});

// Test Case 10: //* Sample Image: refer to Images -> BST-structure-10.png
test("Return an array of values - [15, 12, 19, 2, 21]", () => {
    const tree = constructTree(Structures["10"]);
    expect(levelOrder(tree.root)).toEqual([15, 12, 19, 2, 21]);
});

// Test Case 11: //* Sample Image: refer to Images -> BST-structure-11.png
test("Return an array of values - [25, 15, 30, 5, 20, 35, 45, 42, 47, 50, 69]", () => {
    const tree = constructTree(Structures["11"]);
    expect(levelOrder(tree.root)).toEqual([25, 15, 30, 5, 20, 35, 45, 42, 47, 50, 69]);
});

// Test Case 12: //* Sample Image: refer to Images -> BST-structure-12.png
test("Return an array of values - [777, 555, 888, 444, 666, 999]", () => {
    const tree = constructTree(Structures["12"]);
    expect(levelOrder(tree.root)).toEqual([777, 555, 888, 444, 666, 999]);
});

// Test Case 13: //* Sample Image: refer to Images -> BST-structure-13.png
test("Return an array of values - [52, 25, 147, 6, 34, 99, 167, 2, 89, 123, 1, 4, 121, 125]", () => {
    const tree = constructTree(Structures["13"]);
    expect(levelOrder(tree.root)).toEqual([52, 25, 147, 6, 34, 99, 167, 2, 89, 123, 1, 4, 121, 125]);
});

// Test Case 14:
test("Return an array of value - [33]", () => {
    const tree = constructTree([33]);
    expect(levelOrder(tree.root)).toEqual([33]);
});

// Test Case 15:
test("Return an empty array", () => {
    expect(levelOrder(null)).toEqual([]);
});

