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

LinkedList.prototype.print = function() {
    const nodes = []
    let curr = this.head

    while (curr) {
        nodes.push(curr.data)
        curr = curr.next
    }

    console.log(nodes.join(" => "))
}

module.exports = LinkedList