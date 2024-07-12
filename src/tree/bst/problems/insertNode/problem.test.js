const constructTree = require("../../Starter/ConstructTree");
const BST = require("../../Starter/BST");
const Node = require("../../Starter/Node");
const insertNode = require("./problem");

// Test Case 1:
test("return tree with node 89 inserted", () => {
	const inputTree = constructTree([84, 66]);
	const outputTree = constructTree([84, 66, 89]);
	expect(insertNode(inputTree.root, new Node(89))).toEqual(outputTree.root);
});

/*

	  84                 84 
	/	     =>        /    \	  
  66                 66      89

*/

// Test Case 2:
test("return tree with node 1 inserted", () => {
	const inputTree = constructTree([7, 5, 13, 2, 6, 9, 15]);
	const outputTree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(insertNode(inputTree.root, new Node(1))).toEqual(outputTree.root);
});

/*

	    7                           7
	  /	  \             	      /	  \
     5     13        =>          5     13
   /  \   /  \                 /  \   /  \  
  2    6 9   15               2    6 9    15
                             /
                            1 

*/

// Test Case 3:
test("return tree with node 9999 inserted", () => {
	const tree = constructTree([9999]);
	expect(insertNode(new BST().root, new Node(9999))).toEqual(tree.root);
});
/*

        =>    9999      

*/

// Test Case 4:
test("return tree with node 18 inserted", () => {
	const inputTree = constructTree([24, 17, 31, 34, 32, 39]);
	const outputTree = constructTree([24, 17, 31, 34, 32, 39, 18]);
	expect(insertNode(inputTree.root, new Node(18))).toEqual(outputTree.root);
});

/*

     24                   24
    /  \                 /  \
   17  31               17  31    
         \       =>       \   \     
         34                18  34
        /  \                  /  \
       32  39                32  39

*/


// Test Case 5:
test("return tree with node 0 inserted", () => {
	const inputTree = constructTree([1234]);
	const outputTree = constructTree([1234, 0]);
	expect(insertNode(inputTree.root, new Node(0))).toEqual(outputTree.root);
});

/*

	                1234
    1234    =>     /
                  0

*/

// Test Case 6:
test("return tree with node 15 inserted", () => {
	const inputTree = constructTree([7, 5, 13, 2, 6, 9]);
	const outputTree = constructTree([7, 5, 13, 2, 6, 9, 15]);
	expect(insertNode(inputTree.root, new Node(15))).toEqual(outputTree.root);
});

/*

	    7                            7
	  /	  \             	      /	   \
     5     13        =>          5      13
   /  \   /                    /   \   /  \  
  2    6 9                    2     6 9    15

*/

// Test Case 7:
test("return tree with node 77 inserted", () => {
	const inputTree = constructTree([84, 66, 89, 99]);
	const outputTree = constructTree([84, 66, 89, 77, 99]);
	expect(insertNode(inputTree.root, new Node(77))).toEqual(outputTree.root);
});

/*

	    84                        84 
	  /	   \             	   /	 \
    66      89       =>      66       89
              \                \        \
               99               77       99

*/