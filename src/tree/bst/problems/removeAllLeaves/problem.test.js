const constructTree = require("../../Starter/ConstructTree");
const removeAllLeaves = require("./problem");

// Test Case 1:
test("Return a tree with only 1 node left after removing 2 leaves", () => {
  const inputTree = constructTree([84, 66, 89]);
  const outputTree = constructTree([84]);
  expect(removeAllLeaves(inputTree.root)).toEqual(outputTree.root);
});
/*

	    84                   84 
    /	   \        =>      	        
  66      89             

*/

// Test Case 2:
test("Return a tree with only 4 nodes left after removing 3 leaves", () => {
  const inputTree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
  const outputTree = constructTree([7, 5, 13, 2]);
  expect(removeAllLeaves(inputTree.root)).toEqual(outputTree.root);
});
/*

		    7                            7
	    /	  \             	         /   \
     5     13        =>          5      13
   /  \   /  \                 /          
  2    6 9   15               2      
 /
1 

*/

// Test Case 3:
test("return empty tree", () => {
  expect(removeAllLeaves(null)).toEqual(null);
});

// Test Case 4:
test("Return a tree with only 3 nodes left after removing 3 leaves", () => {
  const inputTree = constructTree([24, 17, 31, 34, 32, 39]);
  const outputTree = constructTree([24, 31, 34]);
  expect(removeAllLeaves(inputTree.root)).toEqual(outputTree.root);
});
/*

     24                   24
    /  \                    \
   17  31                    31    
         \       =>            \     
         34                     34
        /  \                  
       32  39             

*/

// Test Case 5:
test("Return a tree with only 3 nodes left after removing 4 leaves", () => {
  const inputTree = constructTree([7, 5, 13, 2, 6, 9, 15]);
  const outputTree = constructTree([7, 5, 13]);
  expect(removeAllLeaves(inputTree.root)).toEqual(outputTree.root);
});
/*

		    7                           7
	    /	  \             	        /   \
     5     13        =>         5      13
   /  \   /  \                           
  2    6 9   15                     

*/

// Test Case 6:
test("Return a tree with 0 nodes left after removing the root leaf", () => {
  const inputTree = constructTree([23413]);
  expect(removeAllLeaves(inputTree.root)).toEqual(null);
});
/*

  23413   =>               

*/

// Test Case 1:
test("Return a tree with only 1 node left after removing 1 leaf", () => {
  const inputTree = constructTree([84, 66]);
  const outputTree = constructTree([84]);
  expect(removeAllLeaves(inputTree.root)).toEqual(outputTree.root);
});
/*

	    84                  84 
    /	        =>      	        
  66                   

*/