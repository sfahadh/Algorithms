const constructTree = require("../../Starter/ConstructTree");
const firstCousins = require("./problem");

// Test Case 1:
test("Return false because 5 and 13 are not cousins", () => {
  const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
  expect(firstCousins(tree.root, 5, 13)).toEqual(false);
});
/*

  		    7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

*/

// Test Case 2:
test("Return false because 25 and 43 are not cousins", () => {
  const tree = constructTree([43, 25, 65]);
  expect(firstCousins(tree.root, 25, 43)).toEqual(false);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Return false because there is only 1 node - Part I", () => {
  const tree = constructTree([17]);
  expect(firstCousins(tree.root, 14, 32)).toEqual(false);
});
/*

  	17

*/

// Test Case 4:
test("Return true because 8 and 21 are cousins", () => {
  const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
  expect(firstCousins(tree.root, 8, 21)).toEqual(true);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("Return false because there is no tree", () => {
  expect(firstCousins(null)).toEqual(false);
});

// Test Case 6:
test("Return true because 24 and 45 are cousins", () => {
  const tree = constructTree([25, 16, 26, 5, 21, 35, 24, 45, 47, 69]);
  expect(firstCousins(tree.root, 24, 45)).toEqual(false);
});
/*

	   25                          
	  /  \             	   
    16    26     
   /  \     \           
  5    21    35  
         \     \
          24    45
                  \
                   47
                     \
                      69           

*/

// Test Case 7:
test("Return false because there is only 1 node - Part II", () => {
  const tree = constructTree([17]);
  expect(firstCousins(tree.root, 17, 234)).toEqual(false);
});
/*

  	17

*/

// Test Case 8:
test("Return true because 8 and 16 are cousins", () => {
  const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
  expect(firstCousins(tree.root, 8, 16)).toEqual(true);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 9:
test("Return true even if 2 and 89 are distant cousins", () => {
  const tree = constructTree([52, 25, 147, 6, 34, 99, 167, 2, 89, 123]);
  expect(firstCousins(tree.root, 2, 89)).toEqual(false);
});
/*

  	        52
  	     /	    \
       25       147
      /  \     /   \
     6   34   99   167
    /        /  \
   2        89  123  

*/

// Test Case 10:
test("Return true because 5 and 35 are cousins", () => {
  const tree = constructTree([25, 16, 26, 5, 21, 35, 24, 45]);
  expect(firstCousins(tree.root, 5, 35)).toEqual(true);
});
/*

	   25                          
	  /  \             	   
    16    26     
   /  \     \           
  5    21    35  
         \     \
          24    45       

*/

// Test Case 11:
test("Return false because 2 and 13 are not cousins", () => {
  const tree = constructTree([7, 5, 13, 2, 6, 9, 15]);
  expect(firstCousins(tree.root, 2, 13)).toEqual(false);
});
/*

  		  7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9   15

*/

// Test Case 12:
test("Return false because 15 and 7 are not cousins", () => {
  const tree = constructTree([7, 5, 13, 6, 9, 15]);
  expect(firstCousins(tree.root, 15, 7)).toEqual(false);
});
/*

       7
     /   \
    5     13
     \   /  \
      6 9   15

*/

// Test Case 13:
test("Return false because 12 and 79 are not cousins", () => {
  const tree = constructTree([43, 25, 65, 12, 79]);
  expect(firstCousins(tree.root, 12, 79)).toEqual(true);
});
/*

        43
      /	   \
    25      65
   /          \
 12            79

*/

// Test Case 14:
test("Return false because nodes 121 and 125 are brothers/sisters", () => {
  const tree = constructTree([52, 25, 147, 6, 34, 99, 167, 2, 89, 123, 1, 4, 121, 125]);
  expect(firstCousins(tree.root, 121, 125)).toEqual(false);
});
/*

            52
          /	  \
        25     147
       /  \   /   \
      6   34 99   167
     /      /  \
    2      89  123  
   / \        /   \
  1   4      121  125

*/

// Test Case 15:
test("Return false even if 6 and 89 are not cousins", () => {
  const tree = constructTree([52, 25, 147, 6, 34, 99, 167, 2, 89, 123]);
  expect(firstCousins(tree.root, 6, 89)).toEqual(false);
});
/*

  	        52
  	     /	    \
       25       147
      /  \     /   \
     6   34   99   167
    /        /  \
   2        89  123  

*/

// Test Case 16:
test("Return false because nodes 435 and 3435 are not located anywhere in the tree", () => {
  const tree = constructTree([25, 16, 26, 5, 21, 35]);
  expect(firstCousins(tree.root, 435, 3435)).toEqual(false);
});
/*

	   25                          
	  /  \             	   
    16    26     
   /  \     \           
  5    21    35     

*/

// Test Case 17:
test("Return false because nodes 7354 and 21345 are not located anywhere in the tree", () => {
  const tree = constructTree([43, 25, 65]);
  expect(firstCousins(tree.root, 7354, 21345)).toEqual(false);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 18:
test("Return false because only node 12 is located in the tree and not 23", () => {
  const tree = constructTree([43, 25, 65, 12, 79]);
  expect(firstCousins(tree.root, 12, 23)).toEqual(false);
});
/*

        43
      /	   \
    25      65
   /          \
 12            79

*/

// Test Case 19:
test("Return true because nodes 6 and 167 are cousins", () => {
  const tree = constructTree([52, 25, 147, 6, 34, 99, 167, 2, 89, 123, 1, 4, 121, 125]);
  expect(firstCousins(tree.root, 6, 167)).toEqual(true);
});
/*

            52
          /	  \
        25     147
       /  \   /   \
      6   34 99   167
     /      /  \
    2      89  123  
   / \        /   \
  1   4      121  125

*/

// Test Case 20:
test("Return false because nodes 1 and 121 are very distant cousins", () => {
  const tree = constructTree([52, 25, 147, 6, 34, 99, 167, 2, 89, 123, 1, 4, 121, 125]);
  expect(firstCousins(tree.root, 1, 121)).toEqual(false);
});
/*

            52
          /	  \
        25     147
       /  \   /   \
      6   34 99   167
     /      /  \
    2      89  123  
   / \        /   \
  1   4      121  125

*/