const constructTree = require("../../Starter/ConstructTree");
const findMax = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("Highest node value in tree is 39", () => {
	const tree = constructTree(Structures["1"]);
	expect(findMax(tree.root)).toEqual(39);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Highest node value in tree is 15", () => {
	const tree = constructTree([10, 6, 15]);
	expect(findMax(tree.root)).toEqual(15);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("Highest node value in tree is 123", () => {
	const tree = constructTree(Structures["3"]);
	expect(findMax(tree.root)).toEqual(123);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("Highest node value in tree is 62", () => {
	const tree = constructTree(Structures["4"]);
	expect(findMax(tree.root)).toEqual(62);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("Highest node value in tree is 65", () => {
	const tree = constructTree(Structures["5"]);
	expect(findMax(tree.root)).toEqual(65);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Highest node value in tree is 9", () => {
	const tree = constructTree(Structures["6"]);
	expect(findMax(tree.root)).toEqual(9);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Highest node value in tree is 55 - Part I", () => {
	const tree = constructTree(Structures["7"]);
	expect(findMax(tree.root)).toEqual(55);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("Highest node value in tree is 139", () => {
	const tree = constructTree(Structures["8"]);
	expect(findMax(tree.root)).toEqual(139);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("Highest node value in tree is 55 - Part II", () => {
	const tree = constructTree(Structures["9"]);
	expect(findMax(tree.root)).toEqual(55);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("Highest node value in tree is 21", () => {
	const tree = constructTree(Structures["10"]);
	expect(findMax(tree.root)).toEqual(21);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("Highest node value in tree is 69", () => {
	const tree = constructTree(Structures["11"]);
	expect(findMax(tree.root)).toEqual(69);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("Highest node value in tree is 999", () => {
	const tree = constructTree(Structures["12"]);
	expect(findMax(tree.root)).toEqual(999);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("Highest node value in tree is 167", () => {
	const tree = constructTree(Structures["13"]);
	expect(findMax(tree.root)).toEqual(167);
});

// Test Case 14:
test("There is no tree, should return null", () => {
	expect(findMax(null)).toEqual(null);
});

// Test Case 15:
test("Highest node value in tree is 545315", () => {
	const tree = constructTree([545315]);
	expect(findMax(tree.root)).toEqual(545315);
});