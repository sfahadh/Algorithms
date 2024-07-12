const constructTree = require("../../Starter/ConstructTree");
const rangeSum = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("The range sum value should return 87", () => {
	const tree = constructTree(Structures["1"]);
	expect(rangeSum(tree.root, 24, 32)).toEqual(87);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The range sum value should return 16", () => {
	const tree = constructTree(Structures["2"]);
	expect(rangeSum(tree.root, 1, 12)).toEqual(16);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("The range sum value should return 185", () => {
	const tree = constructTree(Structures["3"]);
	expect(rangeSum(tree.root, 62, 123)).toEqual(185);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("The range sum value should return 13", () => {
	const tree = constructTree(Structures["4"]);
	expect(rangeSum(tree.root, 13, 13)).toEqual(13);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("The range sum value should return 0", () => {
	const tree = constructTree(Structures["5"]);
	expect(rangeSum(tree.root, -1000, 2)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("The range sum value should return 18", () => {
	const tree = constructTree(Structures["6"]);
	expect(rangeSum(tree.root, 3, 6)).toEqual(18);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return 0, there are no nodes between the range sum", () => {
	const tree = constructTree(Structures["7"]);
	expect(rangeSum(tree.root, 5, 9)).toEqual(0);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("The range sum value should return 488", () => {
	const tree = constructTree(Structures["8"]);
	expect(rangeSum(tree.root, 53, 85)).toEqual(488);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("The range sum value should return 3", () => {
	const tree = constructTree(Structures["9"]);
	expect(rangeSum(tree.root, 11, 32)).toEqual(33);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("The range sum value should return 15", () => {
	const tree = constructTree(Structures["10"]);
	expect(rangeSum(tree.root, 15, 16)).toEqual(15);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("The range sum value should return 383", () => {
	const tree = constructTree(Structures["11"]);
	expect(rangeSum(tree.root, 0, 100)).toEqual(383);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("The range sum value should return 0 because there are no node values in range", () => {
	const tree = constructTree(Structures["12"]);
	expect(rangeSum(tree.root, 22, 45)).toEqual(0);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("Return 0, the high is greater than the low", () => {
	const tree = constructTree(Structures["13"]);
	expect(rangeSum(tree.root, 4, 1)).toEqual(0);
});

// Test Case 14:
test("The range sum value should return 17", () => {
	const tree = constructTree([17]);
	expect(rangeSum(tree.root, 8, 17)).toEqual(17);
});

// Test Case 15:
test("There is no tree, return 0", () => {
	expect(rangeSum(null, 15, 65)).toEqual(0);
});