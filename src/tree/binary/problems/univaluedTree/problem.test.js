const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const isUnivalued = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-11.png
test("Return true because all node values have the value 4", () => {
    expect(isUnivalued(constructTree(structures["11"]))).toEqual(true);
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-12.png
test("Return true because all node values have the value 12", () => {
    expect(isUnivalued(constructTree(structures["12"]))).toEqual(true);
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-13.png
test("Return true because all node values have the value 9", () => {
    expect(isUnivalued(constructTree(structures["13"]))).toEqual(true);
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-14.png
test("Return false because there are a few node values (2 & 3) that do not equal to the rest", () => {
    expect(isUnivalued(constructTree(structures["14"]))).toEqual(false);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-15.png
test("Return false because there is a node value (6) that do not equal to the rest", () => {
    expect(isUnivalued(constructTree(structures["15"]))).toEqual(false);
});

// Test Case 6: //* Sample Output: refer to Images -> BT-structure-16.png
test("Return true because all node values have the value 8", () => {
    expect(isUnivalued(constructTree(structures["16"]))).toEqual(true);
});

// Test Case 7: 
test("Return true because there's no tree", () => {
    expect(isUnivalued(new BinaryTree().root)).toEqual(true);
});

// Test Case 8: //* Sample Output: refer to Images -> BT-structure-8.png
test("Return false because all nodes in the tree are different from one another", () => {
    expect(isUnivalued(constructTree(structures["8"]))).toEqual(false);
});