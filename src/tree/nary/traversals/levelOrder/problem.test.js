const levelOrder = require("./problem");
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
    expect(levelOrder(NaryTree1())).toEqual([14, 51]);
});

// Test Case 2: //* Sample Image: refer to Images -> Nary-structure-2.png
test("Return an array of values - [96, 6, 9]", () => {
    expect(levelOrder(NaryTree2())).toEqual([96, 6, 9]);
});

// Test Case 3: //* Sample Image: refer to Images -> Nary-structure-3.png
test("Return an array of values - [0, 1, 2, 3]", () => {
    expect(levelOrder(NaryTree3())).toEqual([0, 1, 2, 3]);
});

// Test Case 4: //* Sample Image: refer to Images -> Nary-structure-4.png
test("Return an array of values - [0, 1, 2, 3, 4]", () => {
    expect(levelOrder(NaryTree4())).toEqual([0, 1, 2, 3, 4]);
});

// Test Case 5: //* Sample Image: refer to Images -> Nary-structure-5.png
test("Return an array of values - [42, 3, 4, 5, 23, 24, 25, 43, 44, 45]", () => {
    const results = [42, 3, 4, 5, 23, 24, 25, 43, 44, 45];
    expect(levelOrder(NaryTree5())).toEqual(results);
});

// Test Case 6: //* Sample Image: refer to Images -> Nary-structure-6.png
test("Return an array of values - [21, 13, 7, 7, 12, 2, 71, 31, 53, 6, 22]", () => {
    const results = [21, 13, 7, 7, 12, 2, 71, 31, 53, 6, 22];
    expect(levelOrder(NaryTree6())).toEqual(results);
});

// Test Case 7: //* Sample Image: refer to Images -> Nary-structure-7.png
test("Return an array of values - [0, 3, 10, 5, 1, 8, 12, -9, 3, -5, -1, 2]", () => {
    const results = [0, 3, 10, 5, 1, 8, 12, -9, 3, -5, -1, 2];
    expect(levelOrder(NaryTree7())).toEqual(results);
});

// Test Case 8: //* Sample Image: refer to Images -> Nary-structure-8.png
test("Return an array of values - [13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", () => {
    const results = [13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(levelOrder(NaryTree8())).toEqual(results);
});

// Test Case 9: //* Sample Image: refer to Images -> Nary-structure-9.png
test("Return an array of values - [101, 43, 62, 21, 33, 87, 6, 1, 8, 34, 67, 41, 76, 14, 19, 29, 24, 31, 98, 73, 66, 54, 22, 5, 17]", () => {
    const results = [101, 43, 62, 21, 33, 87, 6, 1, 8, 34, 67, 41, 76, 14, 19, 29, 24, 31, 98, 73, 66, 54, 22, 5, 17];
    expect(levelOrder(NaryTree9())).toEqual(results);
});

// Test Case 10: //* Sample Image: refer to Images -> Nary-structure-10.png
test("Return an array of values - [51, 25, 50, 75, 100, 40, 30, 55, 99, 66, 20, 35, 33, 10]", () => {
    const results = [51, 25, 50, 75, 100, 40, 30, 55, 99, 66, 20, 35, 33, 10];
    expect(levelOrder(NaryTree10())).toEqual(results);
});