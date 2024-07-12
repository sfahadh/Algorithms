const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const sameTree = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("The only node in the 2nd input is a subtree for the 1st input", () => {
    const sub = constructTree([3]);
    expect(sameTree(constructTree(structures["1"]), sub)).toEqual(true);
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-2.png
test("The only node in the 2nd input is not a subtree for the 1st input", () => {
    const sub = constructTree([17]);
    expect(sameTree(constructTree(structures["2"]), sub)).toEqual(false);
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-3.png
test("The left and right subtree are in opposite orders, therefore not a subtree of other tree", () => {
    const sub = constructTree([17, 11, null, null, 22]);
    expect(sameTree(constructTree(structures["3"]), sub)).toEqual(false);
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("The 1st and 2nd input are the exact same tree therefore the 2nd input is a subtree of the 1st", () => {
    const tree = constructTree(structures["4"]);
    expect(sameTree(tree, tree)).toEqual(true);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("One of the values is different in the sub", () => {
    const sub = constructTree([22, 12, 11, null, null, null, 22, null, 11]);
    expect(sameTree(constructTree(structures["5"]), sub)).toEqual(false);
});

// Test Case 6: //* Sample Output: refer to Images -> BT-structure-6.png
test("All nodes are in wrong side of tree", () => {
    const sub = constructTree([90, 80, 70, 60, 50, 40]);
    expect(sameTree(constructTree(structures["6"]), sub)).toEqual(false);
});

// Test Case 7: //* Sample Output: refer to Images -> BT-structure-7.png
test("Sub is a subtree of other tree - Part I", () => {
    const sub = constructTree([16, 18, null, null, 4]);
    expect(sameTree(constructTree(structures["7"]), sub)).toEqual(true);
});

// Test Case 8: //* Sample Output: refer to Images -> BT-structure-8.png
test("Sub is a subtree of other tree - Part II", () => {
    const sub = constructTree([79, null, 83, null, 87]);
    expect(sameTree(constructTree(structures["8"]), sub)).toEqual(true);
});

// Test Case 9: //* Sample Output: refer to Images -> BT-structure-9.png
test("Sub is a subtree of other tree - Part III", () => {
    const sub = constructTree([68, 47, 31, null, null, null, 77, null, 78]);
    expect(sameTree(constructTree(structures["9"]), sub)).toEqual(true);
});

// Test Case 10: //* Sample Output: refer to Images -> BT-structure-10.png
test("The subtree under node 66 is swapped", () => {
    const sub = constructTree([88, 77, -22, null, null, -33, null, null, 66, -55, null, null, -44]);
    expect(sameTree(constructTree(structures["10"]), sub)).toEqual(false);
});

// Test Case 11: //* Sample Output: refer to Images -> BT-structure-11.png
test("The sub is a much bigger and completely different tree than the other tree", () => {
    const sub = constructTree(["14"]);
    expect(sameTree(constructTree(structures["11"]), sub)).toEqual(false);
});

// Test Case 12: //* Sample Output: refer to Images -> BT-structure-12.png
test("An empty tree is not a subtree of another empty tree", () => {
    const tree = new BinaryTree().root;
    expect(sameTree(tree, tree)).toEqual(false);
});