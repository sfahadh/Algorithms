const minimumDifference = root => {
    if (!root || !root.left && !root.right) return 0;
    const sorted = bfs(root).sort((a, b) => a - b);
    let min = sorted[1] - sorted[0];
    for (let i = 0; i < sorted.length - 1; i++) {
        if (min > sorted[i + 1] - sorted[i]) {
            min = sorted[i + 1] - sorted[i];
        }
    }
    
    return min;
};

const bfs = root => {
    const arr = [];
    const queue = [root];
    
    while (queue.length) {
        const branch = queue.shift();
        arr.push(branch.data);
        if (branch.left) queue.push(branch.left);
        if (branch.right) queue.push(branch.right);
    }
    
    return arr;
}