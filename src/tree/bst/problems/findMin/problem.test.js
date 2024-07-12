const constructTree = require("../../Starter/ConstructTree");
const findMin = require("./problem");
const structures = require("../../Starter/Structures");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("Lowest node value in tree is 17", () => {
	const tree = constructTree(Structures["1"]);
	expect(findMin(tree.root)).toEqual(17);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Lowest node value in tree is 6", () => {
	const tree = constructTree(Structures["2"]);
	expect(findMin(tree.root)).toEqual(6);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("Lowest node value in tree is 62", () => {
	const tree = constructTree(Structures["3"]);
	expect(findMin(tree.root)).toEqual(62);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("Lowest node value in tree is 13", () => {
	const tree = constructTree(Structures["4"]);
	expect(findMin(tree.root)).toEqual(13);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("Lowest node value in tree is 0", () => {
	const tree = constructTree(Structures["5"]);
	expect(findMin(tree.root)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Lowest node value in tree is 3", () => {
	const tree = constructTree(Structures["6"]);
	expect(findMin(tree.root)).toEqual(3);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Lowest node value in tree is 12", () => {
	const tree = constructTree(structures["7"]);
	expect(findMin(tree.root)).toEqual(12);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("Lowest node value in tree is 36", () => {
	const tree = constructTree(structures["8"]);
	expect(findMin(tree.root)).toEqual(36);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("Lowest node value in tree is 11", () => {
	const tree = constructTree(Structures["9"]);
	expect(findMin(tree.root)).toEqual(11);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("Lowest node value in tree is 2", () => {
	const tree = constructTree(Structures["10"]);
	expect(findMin(tree.root)).toEqual(2);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("Lowest node value in tree is 5", () => {
	const tree = constructTree(Structures["11"]);
	expect(findMin(tree.root)).toEqual(5);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("Lowest node value in tree is 444", () => {
	const tree = constructTree(Structures["12"]);
	expect(findMin(tree.root)).toEqual(444);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("Lowest node value in tree is 1", () => {
	const tree = constructTree(Structures["13"]);
	expect(findMin(tree.root)).toEqual(1);
});

// Test Case 14:
test("There is no tree, should return null", () => {
	expect(findMin(null)).toEqual(null);
});

// Test Case 15:
test("Lowest node value in tree is 5234523", () => {
	const tree = constructTree([5234523]);
	expect(findMin(tree.root)).toEqual(5234523);
});