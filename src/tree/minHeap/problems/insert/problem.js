// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments
/* // Uncomment the imports below if you plan on using them
 * const MinHeap = require("../../starter/minHeap");
 */

/*
TODO: Complete the following Min Heap insert problem below. There are 2 inputs, the heap and the
TODO: data to insert. The goal of this problem is to insert the data into the heap and
TODO: assuring it's following the correct structure

function MaxHeap() {
    this.store = [];
}
*/

//! Do NOT use the already implemented insert method (Ex: heap.insert(data))
const insert = (heap, data) => {
    heap.store.push(data)
    let childIdx = heap.store.length - 1
    let parentIdx

    while (childIdx > 0) {
        parentIdx = Math.floor((childIdx - 1) / 2)

        if (heap.store[childIdx] < heap.store[parentIdx]) {
            swap(heap.store, childIdx, parentIdx)
            childIdx = parentIdx
        } else {
            break
        }
    }

    console.log(heap)
    return heap
};

const swap = (store, i, j) => {
    [store[i], store[j]] = [store[j], store[i]]
}

module.exports = insert;

/*
! Test Case:
* Sample Input:
	    2          
	   /  \
      5   16     
    /  
   25  
data = 1

* Sample Output:
	    1         
	   /  \
      5    2        
    /  \  
   25   16
*/

