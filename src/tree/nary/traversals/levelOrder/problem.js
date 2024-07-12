// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const NaryTree = require("../../Starter/N-aryTree");
 * const Node = require("../../Starter/Node");
*/

/*
TODO: Complete the following level-order N-ary Tree traversal problem below. There is only 1 input, 
TODO: which is the root of the tree. The level-order traversal for N-ary trees is defined as traversing 
TODO: down the tree, starting from the root, which is the first row or level of the tree, visit that node 
TODO: and then go down a level, grabbing all the child nodes starting from the left and moving on 
TODO: towards the right. Then repeat that step by going down to the next level until you reach the last. 
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

const levelOrder = root => {

}

module.exports = levelOrder;

/*
! Test Case 1:
* Sample Input: //* Sample Image: refer to Images -> Nary-structure-3.png
* Sample Output: [0, 1, 2, 3]

! Test Case 2:
* Sample Input: //* Sample Image: refer to Images -> Nary-structure-6.png
* Sample Output: [21, 13, 7, 7, 12, 2, 71, 31, 53, 6, 22]
*/