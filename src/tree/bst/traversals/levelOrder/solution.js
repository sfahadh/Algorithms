const levelOrder = root => {
    if (root === null) return [];
    const array = [];
    const queue = [root];
    while (queue.length) {
        const branch = queue.shift();
        array.push(branch.data);
        if (branch.left) queue.push(branch.left);
        if (branch.right) queue.push(branch.right);
    }
    return array;
}

module.exports = levelOrder;