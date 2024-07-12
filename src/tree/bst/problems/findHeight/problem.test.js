const constructTree = require("../../Starter/ConstructTree");
const findHeight = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("From the root of the BST to the node 39, the height is 4", () => {
  const tree = constructTree(Structures["1"]);
  expect(findHeight(tree.root, 39)).toEqual(4);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("From the root of the BST to the node 6, the height is 2", () => {
  const tree = constructTree(Structures["2"]);
  expect(findHeight(tree.root, 6)).toEqual(2);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("From the root of the BST to the node 123, the height is 2", () => {
  const tree = constructTree(Structures["3"]);
  expect(findHeight(tree.root, 123)).toEqual(2);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("Node not found in BST, should return 0 - Part I", () => {
  const tree = constructTree(Structures["3"]);
  expect(findHeight(tree.root, 14)).toEqual(0);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("From the root of the BST to the node 33, the height is 3", () => {
  const tree = constructTree(Structures["5"]);
  expect(findHeight(tree.root, 33)).toEqual(3);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Node not found in BST, should return 0 - Part II", () => {
  const tree = constructTree(Structures["6"]);
  expect(findHeight(tree.root, 24)).toEqual(0);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("From the root of the BST to the node 51, the height is 4", () => {
  const tree = constructTree(Structures["7"]);
  expect(findHeight(tree.root, 51)).toEqual(4);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("From the root of the BST to the node 85, the height is 6", () => {
  const tree = constructTree(Structures["8"]);
  expect(findHeight(tree.root, 85)).toEqual(6);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("From the root of the BST to the node 11, the height is 5", () => {
  const tree = constructTree(Structures["9"]);
  expect(findHeight(tree.root, 11)).toEqual(5);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("From the root of the BST to the node 15, the height is 1", () => {
  const tree = constructTree(Structures["10"]);
  expect(findHeight(tree.root, 15)).toEqual(1);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("From the root of the BST to the node 69, the height is 7", () => {
  const tree = constructTree(Structures["11"]);
  expect(findHeight(tree.root, 69)).toEqual(7);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("Node not found in BST, should return 0 - Part III", () => {
  const tree = constructTree(Structures["12"]);
  expect(findHeight(tree.root, 111)).toEqual(0);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("From the root of the BST to the node 1, the height is 5", () => {
  const tree = constructTree(Structures["13"]);
  expect(findHeight(tree.root, 1)).toEqual(5);
});

// Test Case 14:
test("From the root of the BST to the node, the height is 1", () => {
  const tree = constructTree([17]);
  expect(findHeight(tree.root, 17)).toEqual(1);
});

// Test Case 15:
test("Should return 0 as there is no tree", () => {
  expect(findHeight(null)).toEqual(0);
});
