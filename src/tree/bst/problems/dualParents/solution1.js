const dualParent = root => {
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