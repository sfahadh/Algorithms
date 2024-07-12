// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST remove node problem below. There are 2 inputs, the root of the tree 
TODO: and the node that needs to be removed from the tree. The node may or may not have any children. 
TODO: If the node is found, return the tree without that node and all it's children if it has any. 
TODO: Otherwise if the node is not found, return original tree.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const removeNode = (root, nodeData) => {

}

module.exports = removeNode;

/*
! Test Case:
Sample Tree Roots:
* Sample Input: (root, 5):      Sample Output:
		  7                          7
	   /   \             	          \
     5     13           =>            13
   /  \   /  \                       /   \
  2    6 9   15                     9    15
 /
1
*/