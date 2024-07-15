//? Solution #1
const solutionOne = root => {
    if (!root) return 0;
    if (root.left) return solutionOne(root.left);
    return root.data;
}

//? Solution #2
const solutionTwo = root => {
    if (!root) return 0

    return (function recurse(root) {
        if (!root) return Number.MAX_SAFE_INTEGER
        return Math.min(recurse(root.left), root.data)
    })(root)
}