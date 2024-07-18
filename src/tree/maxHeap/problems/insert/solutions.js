//? Solution #1
const solutionOne = (heap, data) => {
    heap.store.push(data)
    let childIdx = heap.store.length - 1
    let parentIdx

    while (childIdx > 0) {
        parentIdx = Math.floor((childIdx - 1) / 2)

        if (heap.store[childIdx] > heap.store[parentIdx]) {
            swap(heap.store, childIdx, parentIdx)
            childIdx = parentIdx
        } else {
            break
        }
    }

    return heap
};

const swap = (store, i, j) => {
    [store[i], store[j]] = [store[j], store[i]]
}