const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const sameTree = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Trees are identical - Part I", () => {
    const tree = constructTree(structures["1"]);
    expect(sameTree(tree, tree)).toEqual(true);
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-2.png
test("Return false because only one tree is an empty tree", () => {
    expect(sameTree(constructTree(structures["2"]), new BinaryTree().root)).toEqual(false);
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-3.png
test("Return false because the left subtree is switched with the right subtree under node 17", () => {
    expect(sameTree(constructTree(structures["3"]), new BinaryTree().root)).toEqual(false);
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("Return false because the left subtree is switched with the right subtree under node 12 in right subtree", () => {
    const tree = constructTree([6, 12, 4, null, null, 3, 12, 4, null, null, 3])
    expect(sameTree(constructTree(structures["4"]), tree)).toEqual(false);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("Return false because the value of the root node is different", () => {
    const tree = constructTree([23, 12, 11, null, null, null, 21, null, 11])
    expect(sameTree(constructTree(structures["5"]), tree)).toEqual(false);
});

// Test Case 6: //* Sample Output: refer to Images -> BT-structure-6.png
test("Return false because last node is missing", () => {
    const tree = constructTree([90, null, 80, null, 70, null, 60])
    expect(sameTree(constructTree(structures["6"]), tree)).toEqual(false);
});

// Test Case 7: //* Sample Output: refer to Images -> BT-structure-7.png
test("Trees are identical - Part II", () => {
    const tree = constructTree(structures["7"]);
    expect(sameTree(tree, tree)).toEqual(true);
});

// Test Case 8: //* Sample Output: refer to Images -> BT-structure-8.png
test("Trees are identical - Part III", () => {
    const tree = constructTree(structures["8"]);
    expect(sameTree(tree, tree)).toEqual(true);
});

// Test Case 9: //* Sample Output: refer to Images -> BT-structure-9.png
test("Return false because only root node exists", () => {
    const tree = constructTree([90])
    expect(sameTree(constructTree(structures["9"]), tree)).toEqual(false);
});

// Test Case 10: //* Sample Output: refer to Images -> BT-structure-10.png
test("Trees are identical - Part IV", () => {
    const tree = constructTree(structures["10"]);
    expect(sameTree(tree, tree)).toEqual(true);
});

// Test Case 11: //* Sample Output: refer to Images -> BT-structure-11.png
test("Return false because one of the leaf nodes has a different value", () => {
    const tree = constructTree([4, 4, null, 4, null, 4, null, null, 4, null, 4, null, 3]);
    expect(sameTree(constructTree(structures["11"]), tree)).toEqual(false);
});

// Test Case 12:
test("Return true because both are empty trees", () => {
    const tree = new BinaryTree().root;
    expect(sameTree(tree, tree)).toEqual(true);
});

