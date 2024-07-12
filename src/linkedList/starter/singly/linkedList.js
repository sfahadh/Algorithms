function LinkedList() {
    this.head = null;
}

LinkedList.prototype.insert = function(node) {
    let currNode = this.head;
    if (currNode) {
        while (currNode.next) { currNode = currNode.next }
        currNode.next = node;
    } else this.head = node;
}

module.exports = LinkedList