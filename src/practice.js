function MinHeap() {
    this.store = []
}

MinHeap.prototype.insert = function(data) {
    this.store.push(data)
    this.bubbleUp()
}

MinHeap.prototype.bubbleUp = function() {
    let childIdx = this.store.length - 1
    let parentIdx

    while (childIdx > 0) {
        parentIdx = Math.floor((childIdx - 1) / 2)

        if (this.store[childIdx] < this.store[parentIdx]) {
            this.swap(parentIdx, childIdx)
            childIdx = parentIdx
        } else {
            break
        }
    }
}

MinHeap.prototype.remove = function() {
    if (this.store.length) {
        this.swap(0, this.store.length - 1)
        this.store.pop()
        this.bubbleDown()
    }
}

MinHeap.prototype.bubbleDown = function() {
    let parentIdx = 0

    while (parentIdx < this.store.length) {
        const leftChildIdx = (2 * parentIdx) + 1
        const rightChildIdx = (2 * parentIdx) + 2

        const leftChild = this.store[leftChildIdx]
        const rightChild = this.store[rightChildIdx]
        const childIdx = rightChild && leftChild < rightChild ? leftChildIdx : rightChildIdx

        if (this.store[parentIdx] > this.store[childIdx]) {
            this.swap(parentIdx, childIdx)
            parentIdx = childIdx
        } else {
            break
        }
    }
}

MinHeap.prototype.swap = function(i, j) {
    [this.store[i], this.store[j]] = [this.store[j], this.store[i]]
}

const arr = [5, 4, 2, 9, 7, 8]
const heap = new MinHeap()

for (const data of arr) {
    heap.insert(data)
}

console.log(heap)
heap.remove()
console.log(heap)
/*
           2
      5         4
   9    7    8     

 0  1  2  3  4  5  6
[1, 5, 2, 7, 9, 8, 4]
 p
*/
