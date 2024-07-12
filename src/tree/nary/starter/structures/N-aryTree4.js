const NaryTree = require("../N-aryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(0);
    InsertToNode(tree, [1]);

    InsertToNode(tree.children[0], [2]);
    InsertToNode(tree.children[0].children[0], [3]);
    InsertToNode(tree.children[0].children[0].children[0], [4]);

    return tree;
}

module.exports = constructTree;