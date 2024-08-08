function MaxHeap() {
    this.store = [];
}

MaxHeap.prototype.insert = function (data) {
    this.store.push(data);
    this.bubbleUp();
}

MaxHeap.prototype.bubbleUp = function () {
    let childIdx = this.store.length - 1
    let parentIdx

    while (childIdx > 0) {
        parentIdx = Math.floor((childIdx - 1) / 2)

        if (this.store[childIdx] > this.store[parentIdx]) {
            this.swap(parentIdx, childIdx)
            childIdx = parentIdx
        } else {
            break
        }
    }
}

MaxHeap.prototype.remove = function() {
    if (this.store.length) {
        this.swap(0, this.store.length - 1)
        const node = this.store.pop()
        this.bubbleDown()
        return node
    }
}

MaxHeap.prototype.bubbleDown = function() {
    let parentIdx = 0

    while (parentIdx < this.store.length) {
        const leftChildIdx = (parentIdx * 2) + 1
        const rightChildIdx = (parentIdx * 2) + 2

        const leftChild = this.store[leftChildIdx]
        const rightChild = this.store[rightChildIdx]
        const childIdx = rightChild && rightChild > leftChild ? rightChildIdx : leftChildIdx

        if (this.store[parentIdx] < this.store[childIdx]) {
            this.swap(parentIdx, childIdx)
            parentIdx = childIdx
        } else {
            break
        }
    }
}

MaxHeap.prototype.swap = function(i, j) {
    [this.store[i], this.store[j]] = [this.store[j], this.store[i]]
}

module.exports = MaxHeap;