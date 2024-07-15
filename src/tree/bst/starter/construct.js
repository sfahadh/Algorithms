const BST = require("./bst");

const constructTree = nodes => {
    const tree = new BST();
    for (let node of nodes) {
        tree.insert(node);
    }
    return tree;
}

module.exports = constructTree;