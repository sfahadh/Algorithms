const NaryTree = require("../N-aryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(21);
    InsertToNode(tree, [13, 7]);

    InsertToNode(tree.children[0], [7, 12]);
    InsertToNode(tree.children[0].children[0], [31, 53]);

    InsertToNode(tree.children[1], [2, 71]);
    InsertToNode(tree.children[1].children[1], [6, 22]);

    return tree;
}

module.exports = constructTree;