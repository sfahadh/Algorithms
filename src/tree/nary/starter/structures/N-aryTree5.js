const NaryTree = require("../N-aryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(42);
    InsertToNode(tree, [3, 4, 5]);

    InsertToNode(tree.children[0], [23]);
    InsertToNode(tree.children[0].children[0], [43]);

    InsertToNode(tree.children[1], [24]);
    InsertToNode(tree.children[1].children[0], [44]);

    InsertToNode(tree.children[2], [25]);
    InsertToNode(tree.children[2].children[0], [45]);

    return tree;
}

module.exports = constructTree;