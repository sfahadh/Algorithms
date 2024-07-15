//? Solution #1
const solutionOne = root => {
    const results = [];
    if (!root) return results;
    const queue = [root];

    while (queue.length) {
        const branch = queue.shift();
        if (!branch.left && !branch.right) results.push(branch.data)
        if (branch.left) queue.push(branch.left);
        if (branch.right) queue.push(branch.right);
    }

    return results.sort((a, b) => a - b);
}

//? Solution #2
const solutionTwo = root => {
    const results = [];

    (function dfs(root) {
        if (!root) return null;
        if (root.left) dfs(root.left);
        if (root.right) dfs(root.right);
        if (!root.left && !root.right) results.push(root.data);
        return;
    })(root)

    return results;
}

//? Solution #3
const solutionThree = root => {
    if (!root) return []
    const left = grabAllLeaves(root.left)
    const right = grabAllLeaves(root.right)

    if (!root.right && !root.left) {
        return [ ...left, ...right, root.data ]
    } else {
        return [ ...left, ...right ]
    }
}