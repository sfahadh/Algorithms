//? Solution #1
const solutionOne = root => {
    if (!root) return 0;
    let count = 0;
    const queue = [root];

    while (queue.length) {
        const branch = queue.shift();
        if (branch.left && branch.right) count++;
        if (branch.left) queue.push(branch.left);
        if (branch.right) queue.push(branch.right);
    }

    return count;
}

//? Solution #2
const solutionTwo = (root) => {
    if (!root || !root.left && !root.right) return 0;

    if (root.left && root.right) {
        return solutionTwo(root.left) + solutionTwo(root.right) + 1;
    }

    if (root.left) return solutionTwo(root.left);
    if (root.right) return solutionTwo(root.right);
}

//? Solution #3
const solutionThree = root => {
    if (!root) return 0
    const left = solutionThree(root.left)
    const right = solutionThree(root.right)

    if (root.left && root.right) {
        return left + right + 1
    } else {
        return left + right
    }
}