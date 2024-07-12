const constructTree = require("../../Starter/ConstructTree");
const contains = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Node is located in the root of the BST - Part I", () => {
	const tree = constructTree(Structures["1"]);
	expect(contains(tree.root, 24)).toEqual(true);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("Node is located on the right subtree under the root node 10", () => {
	const tree = constructTree(Structures["2"]);
	expect(contains(tree.root, 15)).toEqual(true);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("Node is located on the right subtree under the root node 62", () => {
	const tree = constructTree(Structures["3"]);
	expect(contains(tree.root, 123)).toEqual(true);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-4.png
test("Node is located on the left subtree under the root node 62", () => {
	const tree = constructTree(Structures["4"]);
	expect(contains(tree.root, 13)).toEqual(true);
});

// Test Case 5: //* Sample Image: refer to Images -> BST-structure-5.png
test("Node was not found in tree - Part I", () => {
	const tree = constructTree(Structures["5"]);
	expect(contains(tree.root, 12)).toEqual(false);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("Node was not found in tree - Part II", () => {
	const tree = constructTree(Structures["6"]);
	expect(contains(tree.root, 2)).toEqual(false);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-7.png
test("Node was found in the right subtree under the node 21", () => {
	const tree = constructTree(Structures["7"]);
	expect(contains(tree.root, 23)).toEqual(true);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-8.png
test("Node is located on the right subtree under the root node 51", () => {
	const tree = constructTree(Structures["8"]);
	expect(contains(tree.root, 59)).toEqual(true);
});

// Test Case 9: //* Sample Image: refer to Images -> BST-structure-9.png
test("Node is located on the left subtree under the root node 22", () => {
	const tree = constructTree(Structures["9"]);
	expect(contains(tree.root, 11)).toEqual(true);
});

// Test Case 10: //* Sample Image: refer to Images -> BST-structure-10.png
test("Node is located on the left subtree under the root node 12", () => {
	const tree = constructTree(Structures["10"]);
	expect(contains(tree.root, 2)).toEqual(true);
});

// Test Case 11: //* Sample Image: refer to Images -> BST-structure-11.png
test("Node is located on the left subtree under the root node 45", () => {
	const tree = constructTree(Structures["11"]);
	expect(contains(tree.root, 42)).toEqual(true);
});

// Test Case 12: //* Sample Image: refer to Images -> BST-structure-12.png
test("Node is located on the right subtree under the root node 888", () => {
	const tree = constructTree(Structures["12"]);
	expect(contains(tree.root, 999)).toEqual(true);
});

// Test Case 13: //* Sample Image: refer to Images -> BST-structure-13.png
test("Node is located on the right subtree under the root node 2", () => {
	const tree = constructTree(Structures["13"]);
	expect(contains(tree.root, 4)).toEqual(true);
});

// Test Case 14:
test("No nodes in empty tree", () => {
	expect(contains(null, 10)).toEqual(false);
});
