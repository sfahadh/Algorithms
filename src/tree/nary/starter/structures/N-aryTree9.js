const NaryTree = require("../N-aryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(101);
    InsertToNode(tree, [43, 62, 21, 33, 87]);

    InsertToNode(tree.children[0], [6, 1, 8]);
    InsertToNode(tree.children[2], [34]);
    InsertToNode(tree.children[4], [67, 41, 76]);

    InsertToNode(tree.children[0].children[0], [14, 19, 29]);
    InsertToNode(tree.children[0].children[2], [24, 31, 98]);

    InsertToNode(tree.children[4].children[0], [73, 66, 54]);
    InsertToNode(tree.children[4].children[2], [22, 5, 17]);

    return tree;
}

module.exports = constructTree;