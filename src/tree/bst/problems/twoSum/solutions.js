//? Solution #1
const solutionOne = (root, sum) => {
    if (!root) return false;
    const arr = bfs(root);

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[i] + arr[j] === sum) return true;
        }
    }

    return false;
}

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
const solutionTwo = (root, sum, hashmap = {}) => {
    if (!root) return false;
    const diff = hashmap[sum - root.data];

    if (diff) {
        if (diff + root.data === sum) return true;
    } else {
        hashmap[root.data] = root.data;
    }

    return solutionTwo(root.left, sum, hashmap) || solutionTwo(root.right, sum, hashmap);
}

//? Solution #3
const solutionThree = (root, sum, set = new Set()) => {
    if (!root) return false
    const left = solutionThree(root.left, sum, set)
    const right = solutionThree(root.right, sum, set)

    if (set.has(sum - root.data)) {
        return true
    } else {
        set.add(root.data) 
        return left || right
    }
}