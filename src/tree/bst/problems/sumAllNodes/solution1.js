const sumAllNodes = root => {
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