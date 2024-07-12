const constructTree = require("../../Starter/ConstructTree");
const dualParent = require("./problem");
const Strucutres = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("There are 2 parents, nodes 24 & 34 with a left and right child", () => {
	const tree = constructTree(Strucutres["1"]);
	expect(dualParent(tree.root)).toEqual(2);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("There is only 1 parent, node 10 with a left and right child", () => {
	const tree = constructTree(Strucutres["2"]);
	expect(dualParent(tree.root)).toEqual(1);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("There are 0 parents with a left and right child - Part I", () => {
	const tree = constructTree(Strucutres["3"]);
	expect(dualParent(tree.root)).toEqual(0);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("There are 0 parents with a left and right child - Part II", () => {
	const tree = constructTree(Strucutres["4"]);
	expect(dualParent(tree.root)).toEqual(0);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("There are 2 parents, nodes 18 & 5 with a left and right child", () => {
	const tree = constructTree(Strucutres["5"]);
	expect(dualParent(tree.root)).toEqual(2);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("There are 3 parents, nodes 6, 4, & 8 with a left and right child", () => {
	const tree = constructTree(Strucutres["6"]);
	expect(dualParent(tree.root)).toEqual(3);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("There are 3 parents, nodes 33, 21, 40, 13, & 51 with a left and right child", () => {
	const tree = constructTree(Strucutres["7"]);
	expect(dualParent(tree.root)).toEqual(5);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("There is only one parent, node 69 with a left and right child", () => {
	const tree = constructTree(Strucutres["8"]);
	expect(dualParent(tree.root)).toEqual(1);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("There are 0 parents with a left and right child - Part II", () => {
	const tree = constructTree(Strucutres["9"]);
	expect(dualParent(tree.root)).toEqual(0);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("There is only 1 parent, node 15 with a left and right child", () => {
	const tree = constructTree(Strucutres["10"]);
	expect(dualParent(tree.root)).toEqual(1);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("There are 3 parents, nodes 25, 15, & 45 with a left and right child", () => {
	const tree = constructTree(Strucutres["11"]);
	expect(dualParent(tree.root)).toEqual(3);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("There are 2 parents, nodes 777 & 555 with a left and right child", () => {
	const tree = constructTree(Strucutres["12"]);
	expect(dualParent(tree.root)).toEqual(2);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("There are 6 parents, nodes 52, 25, 147, 6, 99, 2, & 123 with a left and right child", () => {
	const tree = constructTree(Strucutres["13"]);
	expect(dualParent(tree.root)).toEqual(6);
});

// Test Case 14:
test("There are no parents with a left and right child - Part III", () => {
	const tree = constructTree([17]);
	expect(dualParent(tree.root)).toEqual(0);
});

// Test Case 15:
test("Should return 0 because there is no tree", () => {
	expect(dualParent(null)).toEqual(0);
});
