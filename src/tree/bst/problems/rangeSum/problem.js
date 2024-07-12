// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST range sum problem below. There are 3 inputs, the root of the tree, the 
TODO: lower range value, and the higher range value. The goal is to find the node values that are in between 
TODO: the lower range value and higher range value and then return the sum of those node values. 

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const rangeSum = (root, low, high) => {

}

module.exports = rangeSum;

/*
! Test Case:
* Sample Tree Root: refer to Images -> BST-structure-6.png
* Sample Input: (root, 3, 6)
* Sample Output: (3 + 4 + 5 + 6) = 18
Greater than 3 & Less than 6:
    { data: 3, left: null, right, null }
    { data: 4, left: 3, right, 5 }
    { data: 5, left: null, right, null }
    { data: 6, left: 4, right, 8 }
*/