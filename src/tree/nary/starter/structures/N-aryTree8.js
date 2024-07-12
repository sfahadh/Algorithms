const NaryTree = require("../N-aryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(13);
    InsertToNode(tree, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    return tree;
}

module.exports = constructTree;