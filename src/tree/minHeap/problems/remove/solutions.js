//? Solution #1
const solutionOne = heap => {
    if (!heap.store.length) return heap
    swap(heap.store, 0, heap.store.length - 1)
    heap.store.pop()

    let parentIdx = 0
    while (parentIdx < heap.store.length) {
        const leftChildIdx = (parentIdx * 2) + 1
        const rightChildIdx = (parentIdx * 2) + 2

        const leftChild = heap.store[leftChildIdx]
        const rightChild = heap.store[rightChildIdx]
        const childIdx = rightChild && rightChild < leftChild ? rightChildIdx : leftChildIdx

        if (heap.store[parentIdx] > heap.store[childIdx]) {
            swap(heap.store, parentIdx, childIdx)
            parentIdx = childIdx
        } else {
            break
        }
    }
    
    return heap
};

const swap = (store, i, j) => {
    [store[i], store[j]] = [store[j], store[i]]
}