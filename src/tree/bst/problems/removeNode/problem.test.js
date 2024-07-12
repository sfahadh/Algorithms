const constructTree = require("../../Starter/ConstructTree");
const removeNode = require("./problem");

// Test Case 1:
test("return tree without node 89", () => {
  const inputTree = constructTree([84, 66, 89]);
  const outputTree = constructTree([84, 66]);
  expect(removeNode(inputTree.root, 89)).toEqual(outputTree.root);
});
/*

	     84                        84 
	  /	   \              	     /	  
  66      89       =>      66

*/

// Test Case 2:
test("return tree without node 1", () => {
  const inputTree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
  const outputTree = constructTree([7, 5, 13, 2, 6, 9, 15]);
  expect(removeNode(inputTree.root, 1)).toEqual(outputTree.root);
});
/*

	        7                       7
	     /	 \             	     /   \
     5     13        =>      5     13
   /  \   /  \             /  \   /  \  
  2    6 9   15           2   6  9   15
 /
1 

*/

// Test Case 3:
test("return empty tree", () => {
  expect(removeNode(null, 65)).toEqual(null);
});

// Test Case 4:
test("remove the root node leaving an empty tree", () => {
  const tree = constructTree([24, 17, 31, 34, 32, 39]);
  expect(removeNode(tree.root, 24)).toEqual(null);
});
/*

     24            
    /  \               
   17  31              
         \       =>             
         34               
        /  \             
       32  39            

*/

// Test Case 5:
test("Return the tree without node 34", () => {
  const inputTree = constructTree([24, 17, 31, 34, 32, 39]);
  const outputTree = constructTree([24, 17, 31]);
  expect(removeNode(inputTree.root, 34)).toEqual(outputTree.root);
});
/*

     24                   
    /  \                    
   17  31                   24   
         \       =>        /  \
         34              17   31
        /  \                  
       32  39                

*/

// Test Case 6:
test("return tree without node 1234", () => {
  const inputTree = constructTree([1234]);
  expect(removeNode(inputTree.root, 1234)).toEqual(null);
});
/*

	1234    =>        

*/

// Test Case 7:
test("Node not found in BST, return original tree - Part I", () => {
  const tree = constructTree([54]);
  expect(removeNode(tree.root, 4123413)).toEqual(tree.root);
});
/*

	54    =>    54       

*/

// Test Case 8:
test("Node not found in BST, return original tree - Part II", () => {
  const tree = constructTree([7, 5, 13, 2, 6, 9, 15]);
  expect(removeNode(tree.root, 8)).toEqual(tree.root);
});
/*

	       7                           7
	    /	  \             	        /	  \
     5     13        =>          5     13
   /  \   /  \                 /  \   /  \  
  2    6 9   15               2    6 9    15

*/

// Test Case 9:
test("Return the tree without node 77", () => {
  const inputTree = constructTree([84, 66, 89, 77, 99]);
  const outputTree = constructTree([84, 89, 99]);
  expect(removeNode(inputTree.root, 66)).toEqual(outputTree.root);
});
/*

	     84                    84
    /	   \             	      \
  66      89       =>          89
    \       \                    \
    77       99                   99

*/