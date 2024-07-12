const Node = require("./Node");

function NaryTree(data = null) {
    this.root = data === null ? null : new Node(data);
    return this.root;
}

module.exports = NaryTree;