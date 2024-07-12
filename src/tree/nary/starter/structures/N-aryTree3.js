const NaryTree = require("../N-aryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(0);
    InsertToNode(tree, [1, 2, 3]);
    return tree;
}

module.exports = constructTree;