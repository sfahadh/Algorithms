//? Solution #1
const solutionOne = root => {
    if (!root) return 0;
    const leftLeaves = [];

    (function recurse(root) {
        if (root.left) {
            if (!root.left.left && !root.left.right) {
                leftLeaves.push(root.left.data);
            } else {
                recurse(root.left);
            }
        }
        if (root.right) recurse(root.right);
    })(root);

    return leftLeaves.length ? leftLeaves.reduce((acc, curr) => acc + curr) : 0;
}

//? Solution #2
const solutionTwo = root => {
    if (!root) return 0;

    if (root.left) {
        if (!root.left.left && !root.left.right) {
            return solutionTwo(root.right) + root.left.data;
        }
    }

    return solutionTwo(root.left) + solutionTwo(root.right);
}

//? Solution #3
const solutionThree = root => {
    if (!root) return 0
    const left = solutionThree(root.left)
    const right = solutionThree(root.right)

    if (root.left && !root.left.right && !root.left.left) {
        return left + right + root.left.data
    } else {
        return left + right
    }
}