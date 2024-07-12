const constructTree = require("../../Starter/ConstructTree");
const sumAllNodes = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("The sum of all nodes should return 177", () => {
  const tree = constructTree(Structures["1"]);
  expect(sumAllNodes(tree.root)).toEqual(177);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The sum of all nodes should return 31", () => {
  const tree = constructTree(Structures["2"]);
  expect(sumAllNodes(tree.root)).toEqual(31);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("The sum of all nodes should return 185", () => {
  const tree = constructTree(Structures["3"]);
  expect(sumAllNodes(tree.root)).toEqual(185);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("The sum of all nodes should return 75", () => {
  const tree = constructTree(Structures["4"]);
  expect(sumAllNodes(tree.root)).toEqual(75);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("The sum of all nodes should return 137", () => {
  const tree = constructTree(Structures["5"]);
  expect(sumAllNodes(tree.root)).toEqual(137);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("The sum of all nodes should return 42", () => {
  const tree = constructTree(Structures["6"]);
  expect(sumAllNodes(tree.root)).toEqual(42);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("The sum of all nodes should return 408", () => {
  const tree = constructTree(Structures["7"]);
  expect(sumAllNodes(tree.root)).toEqual(408);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("The sum of all nodes should return 806", () => {
  const tree = constructTree(Structures["8"]);
  expect(sumAllNodes(tree.root)).toEqual(806);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("The sum of all nodes should return 165", () => {
  const tree = constructTree(Structures["9"]);
  expect(sumAllNodes(tree.root)).toEqual(165);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("The sum of all nodes should return 69", () => {
  const tree = constructTree(Structures["10"]);
  expect(sumAllNodes(tree.root)).toEqual(69);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("The sum of all nodes should return 383", () => {
  const tree = constructTree(Structures["11"]);
  expect(sumAllNodes(tree.root)).toEqual(383);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("The sum of all nodes should return 4329", () => {
  const tree = constructTree(Structures["12"]);
  expect(sumAllNodes(tree.root)).toEqual(4329);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("The sum of all nodes should return 995", () => {
  const tree = constructTree(Structures["13"]);
  expect(sumAllNodes(tree.root)).toEqual(995);
});

// Test Case 14:
test("The sum of all nodes should return 17", () => {
  const tree = constructTree([17]);
  expect(sumAllNodes(tree.root)).toEqual(17);
});

// Test Case 15:
test("The sum of all nodes should return 0", () => {
  expect(sumAllNodes(null)).toEqual(0);
});
