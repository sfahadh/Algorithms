const constructHeap = require("../../starter/construct");
const insert = require("./problem");

// Test Case 1:
test("Return heap of values - [2, 5, 16, 25, 27]", () => {
	const inputHeap = constructHeap([25, 16, 2, 5]);
    const outputHeap = constructHeap([25, 16, 2, 5]);
    outputHeap.insert(27)
	expect(insert(inputHeap, 27)).toEqual(outputHeap);
});

// Test Case 2:
test("Return heap of values - [9234]", () => {
	const inputHeap = constructHeap([]);
    const outputHeap = constructHeap([]);
    outputHeap.insert(9234)
	expect(insert(inputHeap, 9234)).toEqual(outputHeap);
});

// Test Case 3:
test("Return heap of values - [1, 4, 2, 9, 5, 7]", () => {
	const inputHeap = constructHeap([9, 5, 7, 4, 2]);
    const outputHeap = constructHeap([9, 5, 7, 4, 2]);
    outputHeap.insert(1)
	expect(insert(inputHeap, 1)).toEqual(outputHeap);
});

// Test Case 4:
test("Return heap of values - [8, 10, 9, 14, 13, 14]", () => {
	const inputHeap = constructHeap([14, 14, 13, 10, 8]);
    const outputHeap = constructHeap([14, 14, 13, 10, 8]);
    outputHeap.insert(9)
	expect(insert(inputHeap, 9)).toEqual(outputHeap);
});

// Test Case 5:
test("Return heap of values - [8, 10, 11, 14, 13, 14]", () => {
	const inputHeap = constructHeap([14, 14, 13, 10, 8]);
    const outputHeap = constructHeap([14, 14, 13, 10, 8]);
    outputHeap.insert(11)
	expect(insert(inputHeap, 11)).toEqual(outputHeap);
});

// Test Case 6:
test("Return heap of values - [5, 16, 24, 27, 26]", () => {
	const inputHeap = constructHeap([27, 16, 24, 5]);
    const outputHeap = constructHeap([27, 16, 24, 5]);
    outputHeap.insert(26)
	expect(insert(inputHeap, 26)).toEqual(outputHeap);
});