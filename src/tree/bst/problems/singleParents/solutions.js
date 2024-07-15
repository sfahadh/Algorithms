//? Solution #1
const solutionOne = root => {
    if (!root) return 0;
    if (root.left && !root.right) return solutionOne(root.left) + 1;
    if (!root.left && root.right) return solutionOne(root.right) + 1;
    return solutionOne(root.left) + solutionOne(root.right);
}

//? Solution #2
const solutionTwo = root => {
    if (!root) return 0
    const left = solutionTwo(root.left)
    const right = solutionTwo(root.right)

    if (root.right && !root.left || !root.right && root.left) {
        return left + right + 1
    } else {
        return left + right
    }
}