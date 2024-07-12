// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST average level problem below. There is only one input, the BST. 
TODO: The goal of this problem is to add up the nodes on each level of the BST, starting with the first level and 
TODO: find the average of those node datas. Traverse to all other levels of the BST, adding up the nodes and 
TODO: calculating the averages for each. Capture the average of each levels into an array and return it.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const avgLevel = root => {

};

module.exports = avgLevel;

/*
! Test Case:
* Sample Input:
	    25           Level 1: 25
	   /  \
     16    26        Level 2: (26 + 16) / 2 = 26
    /  \     \
   5   27     34     Level 3: (5 + 27 + 34) / 3 = 22
* Sample Output: [25, 26, 22]
*/

// ? If the average ends up being a decimal, floor the value;
