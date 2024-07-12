// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const NaryTree = require("../../Starter/N-aryTree");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following pre-order N-ary Tree traversal problem below. There is only 1 input, 
TODO: which is the root of the tree. The pre-order traversal for N-ary trees is defined as traversing down 
TODO: the tree, visiting the parent node first and then the children starting from the left going 
TODO: towards the right. If a child in the left has children of its own, visit its children before move on 
TODO: towards the right. All nodes visited should be pushed into an array and then returned as a result.

function NaryTree(data = null) {
    this.root = data === null ? null : new Node(data);
    return this.root;
}

function Node(data) {
    this.data = data;
    this.children = [];
}
*/

const preOrder = root => {

}

module.exports = preOrder;

/*
! Test Case 1:
* Sample Input: //* Sample Image: refer to Images -> Nary-structure-3.png
* Sample Output: [0, 1, 2, 3]

! Test Case 2:
* Sample Input: //* Sample Image: refer to Images -> Nary-structure-6.png
* Sample Output: [21, 13, 7, 31, 53, 12, 7, 2, 71, 6, 22]
*/