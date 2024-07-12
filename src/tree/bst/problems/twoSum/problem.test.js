const constructTree = require("../../Starter/ConstructTree");
const twoSum = require("./problem");
const Strucutres = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("Return true because nodes 24 & 32 adds up to 56", () => {
  const tree = constructTree(Strucutres["1"]);
  expect(twoSum(tree.root, 56)).toEqual(true);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Return false because there are no 2 nodes that adds up to 12", () => {
  const tree = constructTree(Strucutres["2"]);
  expect(twoSum(tree.root, 12)).toEqual(false);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("Return true because nodes 62 & 123 adds up to 185", () => {
  const tree = constructTree(Strucutres["3"]);
  expect(twoSum(tree.root, 185)).toEqual(true);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("Return true because nodes 62 & 13 adds up to 75", () => {
  const tree = constructTree(Strucutres["4"]);
  expect(twoSum(tree.root, 75)).toEqual(true);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("Return true because nodes 3 & 65 adds up to 68", () => {
  const tree = constructTree(Strucutres["5"]);
  expect(twoSum(tree.root, 68)).toEqual(true);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return true because nodes 6 & 4 adds up to 10", () => {
  const tree = constructTree(Strucutres["6"]);
  expect(twoSum(tree.root, 10)).toEqual(true);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return true because nodes 15 & 55 adds up to 70", () => {
  const tree = constructTree(Strucutres["7"]);
  expect(twoSum(tree.root, 70)).toEqual(true);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("Return true because nodes 53 & 139 adds up to 192", () => {
  const tree = constructTree(Strucutres["8"]);
  expect(twoSum(tree.root, 192)).toEqual(true);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("Return true because nodes 11 & 44 adds up to 55", () => {
  const tree = constructTree(Strucutres["9"]);
  expect(twoSum(tree.root, 55)).toEqual(true);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("Return false because there are no 2 nodes that adds up to 11", () => {
  const tree = constructTree(Strucutres["10"]);
  expect(twoSum(tree.root, 11)).toEqual(false);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("Return true because nodes 25 & 30 || 50 & 5 || 35 & 20 adds up to 55", () => {
  const tree = constructTree(Strucutres["11"]);
  expect(twoSum(tree.root, 55)).toEqual(true);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("Return false because there are no 2 nodes that adds up to 125312341234", () => {
  const tree = constructTree(Strucutres["12"]);
  expect(twoSum(tree.root, 125312341234)).toEqual(false);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("Return false because there are no 2 nodes that adds up to 13", () => {
  const tree = constructTree(Strucutres["13"]);
  expect(twoSum(tree.root, 13)).toEqual(false);
});

// Test Case 14:
test("Return false there is only 1 node in the tree", () => {
  const tree = constructTree([17]);
  expect(twoSum(tree.root, 17)).toEqual(false);
});

// Test Case 15:
test("Return false because there is no tree", () => {
  expect(twoSum(null, 10)).toEqual(false);
});
