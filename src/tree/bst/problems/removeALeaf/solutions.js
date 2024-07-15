//? Solution #1
const solutionOne = (root, leaf) => {
    if (root === null) return root;
    if (!root.left && !root.right && root.data === leaf) return null;

    if (root.left) {
        if (root.left.data === leaf) {
            root.left = null;
            return root;
        } else {
            solutionOne(root.left, leaf);
        }
    }

    if (root.right) {
        if (root.right.data === leaf) {
            root.right = null;
            return root;
        } else {
            solutionOne(root.right, leaf);
        }
    }

    return root;
}

//? Solution #2
const solutionTwo = (root, leaf) => {
    if (!root) return null
    if (!root.left && !root.right && root.data === leaf) return null
    
    root.left = solutionTwo(root.left, leaf)
    root.right = solutionTwo(root.right, leaf)
    return root
  }