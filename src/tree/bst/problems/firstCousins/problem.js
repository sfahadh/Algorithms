// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST are cousins problem below. There are 3 inputs, the root, 
TODO: and the 2 nodes that may or many not be located in the BST. If however, the 2 nodes are 
TODO: located within the BST, then the goal is to check whether the 2 nodes are cousins or not. 
TODO: If the 2 nodes are cousins, return true, otherwise return false. Cousins are identified 
TODO: as having the same grandparents but different parents. For this problem, second cousins 
TODO: (same great grandparents but different grandparents) or even greater distant cousins will NOT count.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/
const areCousins = (root, n1, n2) => {

}

module.exports = areCousins;

/*
* Sample Tree Root:
	    25                   
	   /  \             	   
     16    26      
    /  \     \           
   5   21     35         

! Test Case 1:
Input: (root, 21, 35)
Output: true

! Test Case 2:
Input: (root, 5, 21)
Output: false
*/