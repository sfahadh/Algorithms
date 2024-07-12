const NaryTree = require("../N-aryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(51);
    InsertToNode(tree, [25, 50, 75, 100]);

    InsertToNode(tree.children[1], [40, 30]);
    InsertToNode(tree.children[2], [55]);
    InsertToNode(tree.children[3], [99, 66]);

    InsertToNode(tree.children[1].children[1], [20]);
    InsertToNode(tree.children[2].children[0], [35]);
    InsertToNode(tree.children[3].children[0], [33]);

    InsertToNode(tree.children[1].children[1].children[0], [10]);

    return tree;
}

module.exports = constructTree;