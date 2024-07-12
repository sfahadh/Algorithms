const twoSum = (root, sum) => {
    if (!root) return false;
    const arr = bfs(root);
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[i] + arr[j] === sum) return true;
        }
    }
    return false;
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