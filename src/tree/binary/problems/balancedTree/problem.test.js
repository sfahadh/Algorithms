const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const balanced = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Return true because there is only 2 nodes in the tree", () => {
    expect(balanced(constructTree(structures["1"]))).toEqual(true);
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-15.png
test("Return true maximum height of tree is 4 and minimum height of tree is 3", () => {
    expect(balanced(constructTree(structures["15"]))).toEqual(true);
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-3.png
test("Return true because there is only 3 nodes and it has a left and right subtree", () => {
    expect(balanced(constructTree(structures["3"]))).toEqual(true);
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("Return true because it is a complete binary tree - Part I", () => {
    expect(balanced(constructTree(structures["4"]))).toEqual(true);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("Return true because the tree is balanced - Part I", () => {
    expect(balanced(constructTree(structures["5"]))).toEqual(true);
});

// Test Case 6: //* Sample Output: refer to Images -> BT-structure-6.png
test("Return false because there is only right subtrees with 5 nodes total", () => {
    expect(balanced(constructTree(structures["6"]))).toEqual(false);
});

// Test Case 7: //* Sample Output: refer to Images -> BT-structure-7.png
test("Return false because there is only 1 node under node 16 in the left subtree and many nodes in the right subtree", () => {
    expect(balanced(constructTree(structures["7"]))).toEqual(false);
});

// Test Case 8: //* Sample Output: refer to Images -> BT-structure-8.png
test("Return false because the tree is not balanced - Part I", () => {
    expect(balanced(constructTree(structures["8"]))).toEqual(false);
});

// Test Case 9: //* Sample Output: refer to Images -> BT-structure-9.png
test("Return true because the tree is balanced - Part II", () => {
    expect(balanced(constructTree(structures["9"]))).toEqual(true);
});

// Test Case 10: //* Sample Output: refer to Images -> BT-structure-10.png
test("Return true because it is a complete binary tree - Part II", () => {
    expect(balanced(constructTree(structures["10"]))).toEqual(true);
});

// Test Case 11: //* Sample Output: refer to Images -> BT-structure-11.png
test("Return false because the tree is not balanced - Part II", () => {
    expect(balanced(constructTree(structures["11"]))).toEqual(false);
});

// Test Case 12: //* Sample Output: refer to Images -> BT-structure-12.png
test("Return false because the tree is not balanced - Part III", () => {
    expect(balanced(constructTree(structures["19"]))).toEqual(false);
});

// Test Case 13:
test("Return true because the tree is empty", () => {
    expect(balanced(new BinaryTree().root)).toEqual(true);
});

// Test Case 14:
test("Return true because there is only 1 node in the tree", () => {
    expect(balanced(constructTree([1]))).toEqual(true);
});