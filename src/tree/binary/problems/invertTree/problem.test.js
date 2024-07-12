const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const invertTree = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Node 3 should be in the left subtree of node 10", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([10, null, 3])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["1"]));
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-2.png
test("Node 18 should be in the right subtree of node 14", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([14, 18])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["2"]));
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-3.png
test("Nodes 11 and 22 should switch", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([17, 11, null, null, 22])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["3"]));
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("Invert of tree is same as original tree", () => {
    const tree = constructTree(structures["4"])
    expect(invertTree(tree)).toEqual(tree);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("Nodes 12 and 21 should switch", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([22, 21, 11, null, null, null, 12, null, 11])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["5"]));
});

// Test Case 6: //* Sample Output: refer to Images -> BT-structure-6.png
test("All nodes in the right subtree will switch to the left subtree", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([90, 80, 70, 60, 50])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["6"]));
});

// Test Case 7: //* Sample Output: refer to Images -> BT-structure-7.png
test("Nodes 1 and 21 should switch", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([16, 21, 3, 8, null, null, null, 5, 16, 4, null, null, 18, null, null, 7, null, null, 1])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["7"]));
});

// Test Case 8: //* Sample Output: refer to Images -> BT-structure-8.png
test("Nodes 62 and 90 should switch", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([78, 90, 93, 99, null, null, null, 79, 83, 87, null, null, null, null, 62, 71, null, 68, null, 66, null, null, 57, null, 52])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["8"]));
});

// Test Case 9: //* Sample Output: refer to Images -> BT-structure-9.png
test("Nodes 68 and 90 should switch", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([45, 90, 93, 88, null, null, null, 91, null, 67, null, null, 68, 77, 78, null, null, null, 47, null, 31])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["9"]));
});

// Test Case 10: //* Sample Output: refer to Images -> BT-structure-10.png
test("Nodes 88 and 55 should switch", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([99, 55, 33, -99, null, null, -88, null, null, 44, -77, null, null, -66, null, null, 88, 66, -55, null, null, -44, null, null, 77, -33, null, null, -22])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["10"]));
}); 