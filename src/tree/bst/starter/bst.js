const Node = require("./Node");

function BST() {
    this.root = null;
}

BST.prototype.insert = function (data) {
    if (!this.root) return this.root = new Node(data);
    let curr = this.root;

    while (curr) {
        if (curr.data === data) return;

        if (data < curr.data) {
            if (curr.left) curr = curr.left;
            else {
                curr.left = new Node(data);
                break;
            }
        }

        if (data > curr.data) {
            if (curr.right) curr = curr.right;
            else {
                curr.right = new Node(data);
                break;
            }
        }
    }
}

module.exports = BST;