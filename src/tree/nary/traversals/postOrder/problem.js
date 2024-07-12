// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const NaryTree = require("../../Starter/N-aryTree");
 * const Node = require("../../Starter/Node");
*/

/*
TODO: Complete the following post-order N-ary Tree traversal problem below. There is only 1 input, 
TODO: which is the root of the tree. The post-order traversal for N-ary trees is defined as traversing 
TODO: down the tree, visiting all the children nodes first, and then visiting the parent node. 
TODO: All nodes visited should be pushed into an array and then returned as a result.

function NaryTree(data = null) {
    this.root = data === null ? null : new Node(data);
    return this.root;
}

function Node(data) {
    this.data = data;
    this.children = [];
}
*/

const postOrder = root => {

}

module.exports = postOrder;

/*
! Test Case 1:
* Sample Input: //* Sample Image: refer to Images -> Nary-structure-3.png
* Sample Output: [1, 2, 3, 0]
//* Sample Image: refer to Images -> Nary-structure-3.png

! Test Case 2:
* Sample Input: //* Sample Image: refer to Images -> Nary-structure-6.png
* Sample Output: [31, 53, 7, 12, 13, 6, 22, 2, 71, 7, 21]
*/