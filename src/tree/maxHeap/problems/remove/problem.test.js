const constructHeap = require("../../starter/construct");
const insert = require("./problem");

// Test Case 1:
test("Return heap of values - [25, 16, 5]", () => {
	const inputHeap = constructHeap([25, 16, 26, 5]);
    const outputHeap = constructHeap([25, 16, 26, 5]);
    outputHeap.remove()
	expect(insert(inputHeap)).toEqual(outputHeap);
});

// Test Case 2:
test("Return heap of values - []", () => {
	const inputHeap = constructHeap([]);
    const outputHeap = constructHeap([]);
    outputHeap.remove()
	expect(insert(inputHeap)).toEqual(outputHeap);
});

// Test Case 3:
test("Return heap of values - [7, 5, 2, 4]", () => {
	const inputHeap = constructHeap([9, 5, 7, 4, 2]);
    const outputHeap = constructHeap([9, 5, 7, 4, 2]);
    outputHeap.remove()
	expect(insert(inputHeap)).toEqual(outputHeap);
});

// Test Case 4:
test("Return heap of values - [14, 10, 13, 8]", () => {
	const inputHeap = constructHeap([14, 14, 13, 10, 8]);
    const outputHeap = constructHeap([14, 14, 13, 10, 8]);
    outputHeap.remove()
    console.log("output", outputHeap)
	expect(insert(inputHeap)).toEqual(outputHeap);
});

// Test Case 5:
test("Return heap of values - []", () => {
	const inputHeap = constructHeap([14]);
    const outputHeap = constructHeap([14]);
    outputHeap.remove()
	expect(insert(inputHeap)).toEqual(outputHeap);
});

// Test Case 6:
test("Return heap of values - [24, 16, 5]", () => {
	const inputHeap = constructHeap([27, 16, 24, 5]);
    const outputHeap = constructHeap([27, 16, 24, 5]);
    outputHeap.remove()
	expect(insert(inputHeap)).toEqual(outputHeap);
});