function LinkedList() {
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.insert = function(node) {
    if (!this.head && !this.tail) {
        this.head = node;
        this.tail = node;
    } else {
        let tailNode = this.tail;
        tailNode.next = node;
        node.prev = tailNode;
        this.tail = node;
    }
}

module.exports = LinkedList