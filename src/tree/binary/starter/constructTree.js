const Node = require("./Node");

const constructTree = arr => {
    let data = arr.shift();
    if (data == null) return null;
    const node = new Node(data);

    node.left = constructTree(arr);
    node.right = constructTree(arr);

    return node;
}

module.exports = constructTree;