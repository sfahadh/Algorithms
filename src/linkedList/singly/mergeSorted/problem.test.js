const LinkedList = require("../../Starter/Singly/linkedList");
const Node = require("../../Starter/Singly/node");
const generate = require("../../Starter/Singly/generate");
const MergeSorted = require("./problem");

// Test Case 1:
test("Return a new sorted Linked List with 4 nodes", () => {
    const inputList1 = new LinkedList;
    const inputList2 = new LinkedList;
    const outputList = new LinkedList;

    inputList1.insert(new Node(3));
    inputList1.insert(new Node(29));

    inputList2.insert(new Node(24));
    inputList2.insert(new Node(42));

    outputList.insert(new Node(3));
    outputList.insert(new Node(24));
    outputList.insert(new Node(29));
    outputList.insert(new Node(42));

    expect(MergeSorted(inputList1, inputList2)).toEqual(outputList);
})

// Test Case 2:
test("Return just second linked list because first one is empty", () => {
    const inputList1 = new LinkedList;
    const inputList2 = new LinkedList;

    inputList2.insert(new Node(1));
    inputList2.insert(new Node(2));
    inputList2.insert(new Node(3));
    inputList2.insert(new Node(4));
    inputList2.insert(new Node(5));

    expect(MergeSorted(inputList1, inputList2)).toEqual(inputList2);
})

// Test Case 3:
test("Return just first linked list because second one is empty", () => {
    const inputList1 = new LinkedList;
    const inputList2 = new LinkedList;

    inputList1.insert(new Node(1));
    inputList1.insert(new Node(2));
    inputList1.insert(new Node(3));
    inputList1.insert(new Node(4));
    inputList1.insert(new Node(5));

    expect(MergeSorted(inputList1, inputList2)).toEqual(inputList1);
})

// Test Case 4:
test("Return a new sorted Linked List with 2 nodes - Part I", () => {
    const inputList1 = new LinkedList;
    const inputList2 = new LinkedList;
    const outputList = new LinkedList;

    inputList1.insert(new Node(167));

    inputList2.insert(new Node(134));

    outputList.insert(new Node(134));
    outputList.insert(new Node(167));

    expect(MergeSorted(inputList1, inputList2)).toEqual(outputList);
})

// Test Case 5:
test("Return a new sorted Linked List with 2 nodes - Part II", () => {
    const inputList1 = new LinkedList;
    const inputList2 = new LinkedList;
    const outputList = new LinkedList;

    inputList1.insert(new Node(134));

    inputList2.insert(new Node(167));

    outputList.insert(new Node(134));
    outputList.insert(new Node(167));

    expect(MergeSorted(inputList1, inputList2)).toEqual(outputList);
})

// Test Case 6:
test("Return a new sorted Linked List with 10 nodes", () => {
    const inputList1 = generate.generateLinkedList(0, 5);
    const inputList2 = generate.generateLinkedList(6, 10);
    const outputList = generate.generateLinkedList(0, 10);

    expect(MergeSorted(inputList1, inputList2)).toEqual(outputList);
})

// Test Case 7:
test("Return a new sorted Linked List with 5 nodes - Part I", () => {
    const inputList1 = new LinkedList;
    const inputList2 = new LinkedList;
    const outputList = generate.generateLinkedList(1, 5);

    inputList1.insert(new Node(1));
    inputList1.insert(new Node(4));
    inputList1.insert(new Node(5));

    inputList2.insert(new Node(2));
    inputList2.insert(new Node(3));

    expect(MergeSorted(inputList1, inputList2)).toEqual(outputList);
})

// Test Case 8:
test("Return a new sorted Linked List with 5 nodes - Part II", () => {
    const inputList1 = new LinkedList;
    const inputList2 = new LinkedList;
    const outputList = generate.generateLinkedList(1, 5);

    inputList2.insert(new Node(1));
    inputList2.insert(new Node(4));
    inputList2.insert(new Node(5));

    inputList1.insert(new Node(2));
    inputList1.insert(new Node(3));

    expect(MergeSorted(inputList1, inputList2)).toEqual(outputList);
})