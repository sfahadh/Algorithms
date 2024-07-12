const constructTree = require("../../Starter/ConstructTree");
const sumRightLeaves = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("The sum of all right leaves should return 39", () => {
	const tree = constructTree(Structures["1"]);
	expect(sumRightLeaves(tree.root)).toEqual(39);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The sum of all right leaves should return 15", () => {
	const tree = constructTree(Structures["2"]);
	expect(sumRightLeaves(tree.root)).toEqual(15);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("The sum of all right leaves should return 123", () => {
	const tree = constructTree(Structures["3"]);
	expect(sumRightLeaves(tree.root)).toEqual(123);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("There are no right leaves, should return 0 - Part I", () => {
	const tree = constructTree(Structures["4"]);
	expect(sumRightLeaves(tree.root)).toEqual(0);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("The sum of all right leaves should return 13", () => {
	const tree = constructTree(Structures["5"]);
	expect(sumRightLeaves(tree.root)).toEqual(13);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("The sum of all right leaves should return 14", () => {
	const tree = constructTree(Structures["6"]);
	expect(sumRightLeaves(tree.root)).toEqual(14);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("The sum of all right leaves should return 93", () => {
	const tree = constructTree(Structures["7"]);
	expect(sumRightLeaves(tree.root)).toEqual(93);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("The sum of all right leaves should return 85", () => {
	const tree = constructTree(Structures["8"]);
	expect(sumRightLeaves(tree.root)).toEqual(85);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("There are no right leaves, should return 0 - Part II", () => {
	const tree = constructTree(Structures["9"]);
	expect(sumRightLeaves(tree.root)).toEqual(0);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("The sum of all right leaves should return 21", () => {
	const tree = constructTree(Structures["10"]);
	expect(sumRightLeaves(tree.root)).toEqual(21);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("The sum of all right leaves should return 89", () => {
	const tree = constructTree(Structures["11"]);
	expect(sumRightLeaves(tree.root)).toEqual(89);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("The sum of all right leaves should return 1665", () => {
	const tree = constructTree(Structures["12"]);
	expect(sumRightLeaves(tree.root)).toEqual(1665);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("The sum of all right leaves should return 330", () => {
	const tree = constructTree(Structures["13"]);
	expect(sumRightLeaves(tree.root)).toEqual(330);
});

// Test Case 14:
test("There is only 1 node, should return 0", () => {
	const tree = constructTree([17]);
	expect(sumRightLeaves(tree.root)).toEqual(0);
});

// Test Case 15:
test("There is no tree, should return 0", () => {
	expect(sumRightLeaves(null)).toEqual(0);
});
