//? Solution #1
const solutionOne = root => {
    if (!root) return 0;
    let sum = 0;

    (function recurse(root) {
        if (!root) return 0;
        if (root.right) {
            if (!root.right.right) sum += root.right.data; 
            recurse(root.right);
        }

        if (root.left) recurse(root.left);
        return sum;
    })(root)

    return sum;
}

//? Solution #2
const solutionTwo = root => {
    if (!root) return 0;

    if (root.right) {
        if (!root.right.left && !root.right.right) {
            return root.right.data + solutionTwo(root.left);
        }
    }

    return solutionTwo(root.left) + solutionTwo(root.right);
}

//? Solution #3
const solutionThree = root => {
    if (!root) return 0
    const left = solutionThree(root.left)
    const right = solutionThree(root.right)

    if (root.right && !root.right.left && !root.right.right) {
        return left + right + root.right.data
    } else {
        return left + right
    }
}