const NaryTree = require("../N-aryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(14);
    InsertToNode(tree, [51]);
    return tree;
}

module.exports = constructTree;