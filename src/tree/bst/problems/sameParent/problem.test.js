const constructTree = require("../../Starter/ConstructTree");
const sameParent = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("Return true because 17 and 31 does have the same parent", () => {
	const tree = constructTree(Structures["1"]);
	expect(sameParent(tree.root, 17, 31)).toEqual(true);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Return false because node 43 does not exist", () => {
	const tree = constructTree(Structures["2"]);
	expect(sameParent(tree.root, 6, 43)).toEqual(false);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("Return false because the node 13 does not exist", () => {
	const tree = constructTree(Structures["3"]);
	expect(sameParent(tree.root, 13, 62)).toEqual(false);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("Return false because 13 and 62 does not have the same parent", () => {
	const tree = constructTree(Structures["4"]);
	expect(sameParent(tree.root, 13, 62)).toEqual(false);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("Return false because 3 and 13 does have the same parent", () => {
	const tree = constructTree(Structures["5"]);
	expect(sameParent(tree.root, 13, 3)).toEqual(true);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return false because 8 and 16 does not have the same parent", () => {
	const tree = constructTree(Structures["6"]);
	expect(sameParent(tree.root, 5, 7)).toEqual(false);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return true because 12 and 15 does have the same parent", () => {
	const tree = constructTree(Structures["7"]);
	expect(sameParent(tree.root, 12, 15)).toEqual(true);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("Return true because 51 and 59 does not have the same parent", () => {
	const tree = constructTree(Structures["8"]);
	expect(sameParent(tree.root, 51, 59)).toEqual(false);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("Return true because 11 and 55 does not have the same parent", () => {
	const tree = constructTree(Structures["9"]);
	expect(sameParent(tree.root, 11, 55)).toEqual(false);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("Return false because 2 and 21 does not have the same parent", () => {
	const tree = constructTree(Structures["10"]);
	expect(sameParent(tree.root, 2, 21)).toEqual(false);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("Return true because 42 and 47 does have the same parent", () => {
	const tree = constructTree(Structures["11"]);
	expect(sameParent(tree.root, 42, 47)).toEqual(true);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("Return true because 666 and 999 does not have the same parent", () => {
	const tree = constructTree(Structures["12"]);
	expect(sameParent(tree.root, 666, 999)).toEqual(false);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("Return true because 89 and 123 does not have the same parent", () => {
	const tree = constructTree(Structures["13"]);
	expect(sameParent(tree.root, 89, 123)).toEqual(true);
});

// Test Case 14:
test("Return false because there is only 1 node", () => {
	const tree = constructTree([17]);
	expect(sameParent(tree.root, 14, 32)).toEqual(false);
});

// Test Case 15:
test("Return false because there is no tree", () => {
	expect(sameParent(null)).toEqual(false);
});

