const NaryTree = require("../N-aryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(0);
    InsertToNode(tree, [3, 10]);

    InsertToNode(tree.children[1], [5, 1, 8]);
    InsertToNode(tree.children[1].children[0], [12, -9, 3]);
    InsertToNode(tree.children[1].children[2], [-5, -1, 2]);

    return tree;
}

module.exports = constructTree;