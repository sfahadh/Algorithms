const grabAllLeaves = root => {
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