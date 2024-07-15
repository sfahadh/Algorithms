//? Solution #1
const solutionOne = root => {
    if (!root) return null;
    if (root && !root.left && !root.right) return null;

    if (root.left) {
        if (!root.left.left && !root.left.right) root.left = null;
        else solutionOne(root.left);
    }

    if (root.right) {
        if (!root.right.left && !root.right.right) root.right = null;
        else solutionOne(root.right);
    }

    return root;
}

//? Solution #2
const solutionTwo = root => {
    if (!root) return null
    if (!root.left && !root.right) return null

    root.left = solutionTwo(root.left)
    root.right = solutionTwo(root.right)
    return root
}