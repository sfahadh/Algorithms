const constructTree = require("../../Starter/ConstructTree");
const avgLevel = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Return an array of values - [24, 24, 34, 35]", () => {
	const tree = constructTree(Structures["1"]);
	expect(avgLevel(tree.root)).toEqual([24, 24, 34, 35]);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("The average levels of BST are [10, 10]", () => {
	const tree = constructTree(Structures["2"]);
	expect(avgLevel(tree.root)).toEqual([10, 10]);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("The average levels of BST are [62, 123]", () => {
	const tree = constructTree(Structures["3"]);
	expect(avgLevel(tree.root)).toEqual([62, 123]);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-4.png
test("The average levels of BST are [62, 13]", () => {
	const tree = constructTree(Structures["4"]);
	expect(avgLevel(tree.root)).toEqual([62, 13]);
});

// Test Case 5: //* Sample Image: refer to Images -> BST-structure-5.png
test("Return an array of values - [18, 35, 16, 0]", () => {
	const tree = constructTree(Structures["5"]);
	expect(avgLevel(tree.root)).toEqual([18, 35, 16, 0]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("The average levels of BST are [6, 6, 6]", () => {
	const tree = constructTree(Structures["6"]);
	expect(avgLevel(tree.root)).toEqual([6, 6, 6]);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-7.png
test("The average levels of BST are [33, 30, 29, 32, 32]", () => {
	const tree = constructTree(Structures["7"]);
	expect(avgLevel(tree.root)).toEqual([33, 30, 29, 32, 32]);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-8.png
test("The average levels of BST are [69, 87, 69, 71, 71, 69]", () => {
	const tree = constructTree(Structures["8"]);
	expect(avgLevel(tree.root)).toEqual([69, 87, 69, 71, 71, 69]);
});

// Test Case 9: //* Sample Image: refer to Images -> BST-structure-9.png
test("Return an array of values - [55, 44, 33, 22, 11]", () => {
	const tree = constructTree(Structures["9"]);
	expect(avgLevel(tree.root)).toEqual([55, 44, 33, 22, 11]);
});

// Test Case 10: //* Sample Image: refer to Images -> BST-structure-10.png
test("Return an array of values - [15, 15, 11]", () => {
	const tree = constructTree(Structures["10"]);
	expect(avgLevel(tree.root)).toEqual([15, 15, 11]);
});

// Test Case 11: //* Sample Image: refer to Images -> BST-structure-11.png
test("Return an array of values - [25, 22, 20, 45, 44, 50, 69]", () => {
	const tree = constructTree(Structures["11"]);
	expect(avgLevel(tree.root)).toEqual([25, 22, 20, 45, 44, 50, 69]);
});

// Test Case 12: //* Sample Image: refer to Images -> BST-structure-12.png
test("Return an array of values - [777, 721, 703]", () => {
	const tree = constructTree(Structures["12"]);
	expect(avgLevel(tree.root)).toEqual([777, 721, 703]);
});

// Test Case 13: //* Sample Image: refer to Images -> BST-structure-13.png
test("Return an array of values - [ 52, 86, 76, 71, 62 ]", () => {
	const tree = constructTree(Structures["13"]);
	expect(avgLevel(tree.root)).toEqual([52, 86, 76, 71, 62]);
});

// Test Case 14:
test("The average levels of BST are [17]", () => {
	const tree = constructTree([17]);
	expect(avgLevel(tree.root)).toEqual([17]);
});

// Test Case 15:
test("The average levels of BST are []", () => {
	expect(avgLevel(null)).toEqual([]);
});
