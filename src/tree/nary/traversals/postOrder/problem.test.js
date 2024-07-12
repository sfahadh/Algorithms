const postOrder = require("./problem");
const NaryTree1 = require("../../Starter/Structures/N-aryTree1");
const NaryTree2 = require("../../Starter/Structures/N-aryTree2");
const NaryTree3 = require("../../Starter/Structures/N-aryTree3");
const NaryTree4 = require("../../Starter/Structures/N-aryTree4");
const NaryTree5 = require("../../Starter/Structures/N-aryTree5");
const NaryTree6 = require("../../Starter/Structures/N-aryTree6");
const NaryTree7 = require("../../Starter/Structures/N-aryTree7");
const NaryTree8 = require("../../Starter/Structures/N-aryTree8");
const NaryTree9 = require("../../Starter/Structures/N-aryTree9");

// Test Case 1: //* Sample Image: refer to Images -> Nary-structure-1.png
test("Return an array of values - [51, 14]", () => {
    expect(postOrder(NaryTree1())).toEqual([51, 14]);
});

// Test Case 2: //* Sample Image: refer to Images -> Nary-structure-2.png
test("Return an array of values - [6, 9, 96]", () => {
    expect(postOrder(NaryTree2())).toEqual([6, 9, 96]);
});

// Test Case 3: //* Sample Image: refer to Images -> Nary-structure-3.png
test("Return an array of values - [1, 2, 3, 0]", () => {
    expect(postOrder(NaryTree3())).toEqual([1, 2, 3, 0]);
});

// Test Case 4: //* Sample Image: refer to Images -> Nary-structure-4.png
test("Return an array of values - [4, 3, 2, 1, 0]", () => {
    expect(postOrder(NaryTree4())).toEqual([4, 3, 2, 1, 0]);
});

// Test Case 5: //* Sample Image: refer to Images -> Nary-structure-5.png
test("Return an array of values - [43, 23, 3, 44, 24, 4, 45, 25, 5, 42]", () => {
    const results = [43, 23, 3, 44, 24, 4, 45, 25, 5, 42];
    expect(postOrder(NaryTree5())).toEqual(results);
});

// Test Case 6: //* Sample Image: refer to Images -> Nary-structure-6.png
test("Return an array of values - [31, 53, 7, 12, 13, 2, 6, 22, 71, 7, 21]", () => {
    const results = [31, 53, 7, 12, 13, 2, 6, 22, 71, 7, 21];
    expect(postOrder(NaryTree6())).toEqual(results);
});

// Test Case 7: //* Sample Image: refer to Images -> Nary-structure-7.png
test("Return an array of values - [3, 12, -9, 3, 5, 1, -5, -1, 2, 8, 10, 0]", () => {
    const results = [3, 12, -9, 3, 5, 1, -5, -1, 2, 8, 10, 0];
    expect(postOrder(NaryTree7())).toEqual(results);
});

// Test Case 8: //* Sample Image: refer to Images -> Nary-structure-8.png
test("Return an array of values - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]", () => {
    const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    expect(postOrder(NaryTree8())).toEqual(results);
});

// Test Case 9: //* Sample Image: refer to Images -> Nary-structure-9.png
test("Return an array of values - [14, 19, 29, 6, 1, 24, 31, 98, 8, 43, 62, 34, 21, 33, 73, 66, 54, 67, 41, 22, 5, 17, 76, 87, 101]", () => {
    const results = [14, 19, 29, 6, 1, 24, 31, 98, 8, 43, 62, 34, 21, 33, 73, 66, 54, 67, 41, 22, 5, 17, 76, 87, 101];
    expect(postOrder(NaryTree9())).toEqual(results);
});
