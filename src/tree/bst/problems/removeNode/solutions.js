//? Solution #1
const solutionOne = (root, nodeData) => {
    if (!root || root.data === nodeData) return null;

    if (root.left && nodeData <= root.left.data) {
        if (root.left.data === nodeData) root.left = null;
        else solutionOne(root.left, nodeData);
    }

    if (root.right && nodeData >= root.right.data) {
        if (root.right.data === nodeData) root.right = null;
        else solutionOne(root.right, nodeData);
    }

    return root;
}

//? Solution #2
const solutionTwo = (root, data) => {
    if (!root || root.data === data) return null
    root.left = solutionTwo(root.left, data)
    root.right = solutionTwo(root.right, data)
    return root
}