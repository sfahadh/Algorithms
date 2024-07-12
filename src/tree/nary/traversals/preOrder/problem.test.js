const preOrder = require("./problem");
const NaryTree1 = require("../../Starter/Structures/N-aryTree1");
const NaryTree2 = require("../../Starter/Structures/N-aryTree2");
const NaryTree3 = require("../../Starter/Structures/N-aryTree3");
const NaryTree4 = require("../../Starter/Structures/N-aryTree4");
const NaryTree5 = require("../../Starter/Structures/N-aryTree5");
const NaryTree6 = require("../../Starter/Structures/N-aryTree6");
const NaryTree7 = require("../../Starter/Structures/N-aryTree7");
const NaryTree8 = require("../../Starter/Structures/N-aryTree8");
const NaryTree9 = require("../../Starter/Structures/N-aryTree9");
const NaryTree10 = require("../../Starter/Structures/N-aryTree10");

// Test Case 1: //* Sample Image: refer to Images -> Nary-structure-1.png
test("Return an array of values - [14, 51]", () => {
    expect(preOrder(NaryTree1())).toEqual([14, 51]);
});

// Test Case 2: //* Sample Image: refer to Images -> Nary-structure-2.png
test("Return an array of values - [96, 6, 9]", () => {
    expect(preOrder(NaryTree2())).toEqual([96, 6, 9]);
});

// Test Case 3: //* Sample Image: refer to Images -> Nary-structure-3.png
test("Return an array of values - [0, 1, 2, 3]", () => {
    expect(preOrder(NaryTree3())).toEqual([0, 1, 2, 3]);
});

// Test Case 4: //* Sample Image: refer to Images -> Nary-structure-4.png
test("Return an array of values - [0, 1, 2, 3, 4]", () => {
    expect(preOrder(NaryTree4())).toEqual([0, 1, 2, 3, 4]);
});

// Test Case 5: //* Sample Image: refer to Images -> Nary-structure-5.png
test("Return an array of values - [42, 3, 23, 43, 4, 24, 44, 5, 25, 45]", () => {
    const results = [42, 3, 23, 43, 4, 24, 44, 5, 25, 45];
    expect(preOrder(NaryTree5())).toEqual(results);
});

// Test Case 6: //* Sample Image: refer to Images -> Nary-structure-6.png
test("Return an array of values - [21, 13, 7, 31, 53, 12, 7, 2, 71, 6, 22]", () => {
    const results = [21, 13, 7, 31, 53, 12, 7, 2, 71, 6, 22];
    expect(preOrder(NaryTree6())).toEqual(results);
});

// Test Case 7: //* Sample Image: refer to Images -> Nary-structure-7.png
test("Return an array of values - [0, 3, 10, 5, 12, -9, 3, 1, 8, -5, -1, 2]", () => {
    const results = [0, 3, 10, 5, 12, -9, 3, 1, 8, -5, -1, 2];
    expect(preOrder(NaryTree7())).toEqual(results);
});

// Test Case 8: //* Sample Image: refer to Images -> Nary-structure-8.png
test("Return an array of values - [13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", () => {
    const results = [13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(preOrder(NaryTree8())).toEqual(results);
});

// Test Case 9: //* Sample Image: refer to Images -> Nary-structure-9.png
test("Return an array of values - [101, 43, 6, 14, 19, 29, 1, 8, 24, 31, 98, 62, 21, 34, 33, 87, 67, 73, 66, 54, 41, 76, 22, 5, 17]", () => {
    const results = [101, 43, 6, 14, 19, 29, 1, 8, 24, 31, 98, 62, 21, 34, 33, 87, 67, 73, 66, 54, 41, 76, 22, 5, 17];
    expect(preOrder(NaryTree9())).toEqual(results);
});

// Test Case 10: //* Sample Image: refer to Images -> Nary-structure-10.png
test("Return an array of values - [51, 25, 50, 40, 30, 20, 10, 75, 55, 35, 100, 99, 33, 66]", () => {
    const results = [51, 25, 50, 40, 30, 20, 10, 75, 55, 35, 100, 99, 33, 66];
    expect(preOrder(NaryTree10())).toEqual(results);
});