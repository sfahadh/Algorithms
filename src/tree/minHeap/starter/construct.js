const MaxHeap = require("./minHeap");

const constructHeap = array => {
    const heap = new MaxHeap();

    for (const data of array) {
        heap.insert(data);
    }
    
    return heap;
}

module.exports = constructHeap;