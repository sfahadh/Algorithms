// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
*/

/*
TODO: Complete the following BST find height problem below. There are 2 inputs, the root of the BST 
TODO: and the node that may or may not be located within the tree. The goal is to return the level 
TODO: or height in which the node can be found in.

function BST() {
	this.root = null;
}

function Node(data) {
	this.data = data;
	this.left = null; 
	this.right = null;
}
*/

const findHeight = (root, node, sum = 0) => {

}

module.exports = findHeight;

/*
* Sample Tree Root: refer to Images -> BST-structure-12.png
		  777         -> Height 1
		 /   \
	   555   888      -> Height 2
	  /  \     \
	444  666   999    -> Height 3

! Test Case 1:
Input: (root, 777)
Output: 1

! Test Case 2:
Input: (root, 888)
Output: 2

! Test Case 3:
Input: (root, 444)
Output: 3
*/