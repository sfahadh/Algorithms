//? Solution #1
const solutionOne = root => {
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

//? Solution #2
const solutionTwo = root => {
    if (!root || !root.left && !root.right) return 0;
    const inOrderArr = [];
    let min = Infinity;

    (function inOrderTraveral(root) {
        if (!root) return null;
        if (root.left) inOrderTraveral(root.left);
        inOrderArr.push(root.data);
        if (root.right) inOrderTraveral(root.right);
    })(root)

    for (let i = 0; i < inOrderArr.length - 1; i++) {
        min = Math.min(min, inOrderArr[i + 1] - inOrderArr[i]);
    }

    return min;
}