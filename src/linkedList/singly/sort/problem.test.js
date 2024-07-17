const LinkedList = require("../../starter/singly/linkedList");
const Node = require("../../starter/singly/node");
const generate = require("../../starter/singly/generate");
const Sort = require("./problem");

// Test Case 1:
test("Return a sorted linked list: { 3 => { 24 => { 29 => { 42 => null } } } }", () => {
    const inputList = new LinkedList;
    const outputList = new LinkedList;

    inputList.insert(new Node(29));
    inputList.insert(new Node(3));
    inputList.insert(new Node(24));
    inputList.insert(new Node(42));

    outputList.insert(new Node(3));
    outputList.insert(new Node(24));
    outputList.insert(new Node(29));
    outputList.insert(new Node(42));

    expect(Sort(inputList.head)).toEqual(outputList.head);
})

// Test Case 2:
test("Return a sorted linked list: { 1 => { 2 => { 3 => { 4 => { 5 => null } } } } }", () => {
    const inputList = new LinkedList;
    const outputList = generate.generateLinkedList(1, 5);

    inputList.insert(new Node(3));
    inputList.insert(new Node(1));
    inputList.insert(new Node(2));
    inputList.insert(new Node(5));
    inputList.insert(new Node(4));

    expect(Sort(inputList.head)).toEqual(outputList.head);
})

// Test Case 3:
test("Return original linked list - Part I", () => {
    const list = generate.generateLinkedList(1, 1);
    expect(Sort(list.head)).toEqual(list.head);
})

// Test Case 4:
test("Return original linked list - Part II", () => {
    const list = generate.generateLinkedList(57, 88);
    expect(Sort(list.head)).toEqual(list.head);
})

// Test Case 5:
test("Return a sorted linked list: { 33 => { 63 => { 99 => null } } }", () => {
    const inputList = new LinkedList;
    const outputList = new LinkedList;

    inputList.insert(new Node(99));
    inputList.insert(new Node(63));
    inputList.insert(new Node(33));

    outputList.insert(new Node(33));
    outputList.insert(new Node(63));
    outputList.insert(new Node(99));

    expect(Sort(inputList.head)).toEqual(outputList.head);
})

// Test Case 6:
test("Return a sorted linked list: { 134 => { 167 => null } }", () => {
    const inputList = new LinkedList;
    const outputList = new LinkedList;

    inputList.insert(new Node(167));
    inputList.insert(new Node(134));

    outputList.insert(new Node(134));
    outputList.insert(new Node(167));

    expect(Sort(inputList.head)).toEqual(outputList.head);
})

// Test Case 7:
test("Return original linked list - Part III", () => {
    const list = new LinkedList;

    list.insert(new Node(25));
    list.insert(new Node(189));

    expect(Sort(list.head)).toEqual(list.head);
})