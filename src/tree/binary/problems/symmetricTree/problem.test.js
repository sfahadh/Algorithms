const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const symmetric = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Return false because there is no right subtree, only a left subtree", () => {
    expect(symmetric(constructTree(structures["1"]))).toEqual(false);
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-11.png
test("Return false because there isn't an equal number of nodes in the right subtree and left subtree", () => {
    expect(symmetric(constructTree(structures["11"]))).toEqual(false);
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-16.png
test("Return false because tree is not symmetric - Part I", () => {
    expect(symmetric(constructTree(structures["16"]))).toEqual(false);
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("Return true because tree is symmetric - Part I", () => {
    expect(symmetric(constructTree(structures["4"]))).toEqual(true);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("Return false because one of the node has a different value", () => {
    expect(symmetric(constructTree(structures["5"]))).toEqual(false);
});

// Test Case 6: //* Sample Output: refer to Images -> BT-structure-18.png
test("Return true because tree is symmetric - Part II", () => {
    expect(symmetric(constructTree(structures["18"]))).toEqual(true);
});

// Test Case 7: //* Sample Output: refer to Images -> BT-structure-19.png
test("Return true because tree is symmetric - Part III", () => {
    expect(symmetric(constructTree(structures["19"]))).toEqual(true);
});

// Test Case 8: //* Sample Output: refer to Images -> BT-structure-20.png
test("Return true because tree is symmetric - Part IV", () => {
    expect(symmetric(constructTree(structures["20"]))).toEqual(true);
});

// Test Case 9: //* Sample Output: refer to Images -> BT-structure-9.png
test("Return false because tree is symmetric - Part II", () => {
    expect(symmetric(constructTree(structures["9"]))).toEqual(false);
});

// Test Case 10: //* Sample Output: refer to Images -> BT-structure-10.png
test("Return false because tree is not symmetric - Part III", () => {
    expect(symmetric(constructTree(structures["10"]))).toEqual(false);
});

// Test Case 11: 
test("Return true because empty tree is symmetric", () => {
    expect(symmetric(new BinaryTree().root)).toEqual(true);
});

// Test Case 12: 
test("Return true because a tree with only 1 node is symmetric", () => {
    const tree = constructTree([1])
    expect(symmetric(tree)).toEqual(true);
});