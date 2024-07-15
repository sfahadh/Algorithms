//? Solution #1
const solutionOne = root => {
    let total = 0;
    if (!root) return total;
    const queue = [root];

    while (queue.length) {
        const branch = queue.shift();
        total += branch.data;
        if (branch.left) queue.push(branch.left);
        if (branch.right) queue.push(branch.right);
    }

    return total;
}

//? Solution #2
const solutionTwo = root => {
    if (!root) return 0;
    return root.data + solutionTwo(root.left) + solutionTwo(root.right);
}