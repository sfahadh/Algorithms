const constructTree = require("../../Starter/ConstructTree");
const singleParent = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("There is only 1 single parent, node 31", () => {
	const tree = constructTree(Structures["1"]);
	expect(singleParent(tree.root)).toEqual(1);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("There are 0 nodes that are single parents - Part I", () => {
	const tree = constructTree(Structures["2"]);
	expect(singleParent(tree.root)).toEqual(0);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("There is only 1 single parent, node 62 - Part I", () => {
	const tree = constructTree(Structures["3"]);
	expect(singleParent(tree.root)).toEqual(1);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("There is only 1 single parent, node 62 - Part II", () => {
	const tree = constructTree(Structures["4"]);
	expect(singleParent(tree.root)).toEqual(1);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("There are 2 single parent, nodes 65 & 3", () => {
	const tree = constructTree(Structures["5"]);
	expect(singleParent(tree.root)).toEqual(2);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("There are 0 nodes that are single parents - Part II", () => {
	const tree = constructTree(Structures["6"]);
	expect(singleParent(tree.root)).toEqual(0);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("There are 2 nodes that are single parents, nodes 17 & 43", () => {
	const tree = constructTree(Structures["7"]);
	expect(singleParent(tree.root)).toEqual(2);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("There are 8 nodes that are single parents, nodes 36, 139, 62, 77, 51, 92, 59, & 83", () => {
	const tree = constructTree(Structures["8"]);
	expect(singleParent(tree.root)).toEqual(8);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("There are 4 nodes that are single parents, nodes 55, 44, 33, & 22", () => {
	const tree = constructTree(Structures["9"]);
	expect(singleParent(tree.root)).toEqual(4);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("There are 2 nodes that are single parents, nodes 12 & 19", () => {
	const tree = constructTree(Structures["10"]);
	expect(singleParent(tree.root)).toEqual(2);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("There are 4 nodes that are single parents, nodes 30, 35, 47, & 50", () => {
	const tree = constructTree(Structures["11"]);
	expect(singleParent(tree.root)).toEqual(4);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("There is only 1 single parents, node 888", () => {
	const tree = constructTree(Structures["12"]);
	expect(singleParent(tree.root)).toEqual(1);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("There is only 1 single parents, node 6", () => {
	const tree = constructTree(Structures["13"]);
	expect(singleParent(tree.root)).toEqual(1);
});

// Test Case 14:
test("There is only 1 node in the tree, return 0", () => {
	const tree = constructTree([17]);
	expect(singleParent(tree.root)).toEqual(0);
});

// Test Case 15:
test("Should return 0 because there is no tree", () => {
	expect(singleParent(null)).toEqual(0);
});