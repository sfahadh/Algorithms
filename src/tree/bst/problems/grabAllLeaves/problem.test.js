const constructTree = require("../../Starter/ConstructTree");
const grabAllLeaves = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("Return an array of [17, 32, 39] leaf nodes", () => {
	const tree = constructTree(Structures["1"]);
	expect(grabAllLeaves(tree.root)).toEqual([17, 32, 39]);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Return an array of [6, 15] leaf nodes", () => {
	const tree = constructTree(Structures["2"]);
	expect(grabAllLeaves(tree.root)).toEqual([6, 15]);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("Return an array of [123] leaf nodes", () => {
	const tree = constructTree(Structures["3"]);
	expect(grabAllLeaves(tree.root)).toEqual([123]);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("Return an array of [13] leaf nodes", () => {
	const tree = constructTree(Structures["4"]);
	expect(grabAllLeaves(tree.root)).toEqual([13]);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("Return an array of [0, 13, 33] leaf nodes", () => {
	const tree = constructTree(Structures["5"]);
	expect(grabAllLeaves(tree.root)).toEqual([0, 13, 33]);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return an array of [3, 5, 7, 9] leaf nodes", () => {
	const tree = constructTree(Structures["6"]);
	expect(grabAllLeaves(tree.root)).toEqual([3, 5, 7, 9]);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return an array of [12, 15, 23, 36, 49, 55] leaf nodes", () => {
	const tree = constructTree(Structures["7"]);
	expect(grabAllLeaves(tree.root)).toEqual([12, 15, 23, 36, 49, 55]);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("Return an array of [53, 85] leaf nodes", () => {
	const tree = constructTree(Structures["8"]);
	expect(grabAllLeaves(tree.root)).toEqual([53, 85]);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("Return an array of [11] leaf nodes", () => {
	const tree = constructTree(Structures["9"]);
	expect(grabAllLeaves(tree.root)).toEqual([11]);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("Return an array of [2, 21] leaf nodes", () => {
	const tree = constructTree(Structures["10"]);
	expect(grabAllLeaves(tree.root)).toEqual([2, 21]);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("Return an array of [5, 20, 42, 69] leaf nodes", () => {
	const tree = constructTree(Structures["11"]);
	expect(grabAllLeaves(tree.root)).toEqual([5, 20, 42, 69]);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("Return an array of [444, 666, 999] leaf nodes", () => {
	const tree = constructTree(Structures["12"]);
	expect(grabAllLeaves(tree.root)).toEqual([444, 666, 999]);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("Return an array of [1, 4, 34, 89, 121, 125, 167] leaf nodes", () => {
	const tree = constructTree(Structures["13"]);
	expect(grabAllLeaves(tree.root)).toEqual([1, 4, 34, 89, 121, 125, 167]);
});

// Test Case 14:
test("Return an array of [17] leaf nodes", () => {
	const tree = constructTree([17]);
	expect(grabAllLeaves(tree.root)).toEqual([17]);
});

// Test Case 15:
test("Return an empty array", () => {
	expect(grabAllLeaves(null)).toEqual([]);
});
