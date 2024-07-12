function MinHeap() {
    this.values = [];
}

MinHeap.prototype.insert = function (data) {
    this.values.push(data);
    this.bubbleDown();
}

MinHeap.prototype.bubbleDown = function () {
    let nodeIndex = this.values.length - 1;
    let parentIndex;

    while (nodeIndex > 0) {
        parentIndex = Math.floor(nodeIndex / 2);
        if (this.values[nodeIndex] > this.values[parentIndex]) break;

        let temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[nodeIndex];
        this.values[nodeIndex] = temp;

        nodeIndex = parentIndex;
    }
}

const heap = new MinHeap();
[48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41].forEach(node => {
    heap.insert(node);
})
console.log(heap);

module.exports = MinHeap;