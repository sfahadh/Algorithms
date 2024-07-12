const constructTree = require("../../Starter/ConstructTree");
const minimumDifference = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("The minimum difference in the BST structure 1 should return 1", () => {
	const tree = constructTree(Structures["1"]);
	expect(minimumDifference(tree.root)).toEqual(1);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The minimum difference in the BST structure 2 should return 4", () => {
	const tree = constructTree(Structures["2"]);
	expect(minimumDifference(tree.root)).toEqual(4);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("The minimum difference in the BST structure 3 should return 61", () => {
	const tree = constructTree(Structures["3"]);
	expect(minimumDifference(tree.root)).toEqual(61);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("The minimum difference in the BST structure 4 should return 49", () => {
	const tree = constructTree(Structures["4"]);
	expect(minimumDifference(tree.root)).toEqual(49);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("The minimum difference in the BST structure 5 should return 2", () => {
	const tree = constructTree(Structures["5"]);
	expect(minimumDifference(tree.root)).toEqual(2);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("The minimum difference in the BST structure 6 should return 1", () => {
	const tree = constructTree(Structures["6"]);
	expect(minimumDifference(tree.root)).toEqual(1);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("The minimum difference in the BST structure 7 should return 1", () => {
	const tree = constructTree(Structures["7"]);
	expect(minimumDifference(tree.root)).toEqual(1);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("The minimum difference in the BST structure 8 should return 2", () => {
	const tree = constructTree(Structures["8"]);
	expect(minimumDifference(tree.root)).toEqual(2);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("The minimum difference in the BST structure 9 should return 11", () => {
	const tree = constructTree(Structures["9"]);
	expect(minimumDifference(tree.root)).toEqual(11);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("The minimum difference in the BST structure 10 should return 2", () => {
	const tree = constructTree(Structures["10"]);
	expect(minimumDifference(tree.root)).toEqual(2);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("The minimum difference in the BST structure 11 should return 2", () => {
	const tree = constructTree(Structures["11"]);
	expect(minimumDifference(tree.root)).toEqual(2);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("The minimum difference in the BST structure 12 should return 111", () => {
	const tree = constructTree(Structures["12"]);
	expect(minimumDifference(tree.root)).toEqual(111);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("The minimum difference in the BST structure 13 should return 1", () => {
	const tree = constructTree(Structures["13"]);
	expect(minimumDifference(tree.root)).toEqual(1);
});

// Test Case 14:
test("The minimum difference in the tree should return 0 because there's only 1 node", () => {
	const tree = constructTree([17]);
	expect(minimumDifference(tree.root)).toEqual(0);
});

// Test Case 15:
test("The minimum difference should return 0 because there's no tree", () => {
	expect(minimumDifference(null)).toEqual(0);
});