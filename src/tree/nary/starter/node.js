function Node(data) {
    this.data = data;
    this.children = [];
}

Node.prototype.insert = function (data) {
    this.children.push(new Node(data));
}

module.exports = Node;