//? Solution #1
const solutionOne = root => {
    if (!root) return [];
    const nodeVals = [[]];
    const queue = [root, "level"];

    while (queue.length > 1) {
        const branch = queue.shift();
        if (branch !== "level") nodeVals[nodeVals.length - 1].push(branch.data);
        if (branch.left && branch !== "level") queue.push(branch.left);
        if (branch.right && branch !== "level") queue.push(branch.right);

        if (!queue.includes("level")) {
            queue.push("level");
            nodeVals.push([]);
        }
    }

    const avg = [];
    for (let arr of nodeVals) {
        const sum = arr.reduce((acc, curr) => acc + curr)
        avg.push(Math.floor(sum / arr.length));
    }

    return avg;
}

//? Solution #2
const solutionTwo = root => {
    if (!root) return []
    const res = []
    const queue = [{ node: root, level: 0 }]

    while (queue.length) {
        const item = queue.shift()

        if (!res[item.level]) res[item.level] = []
        res[item.level].push(item.node.data)

        if (item.node.left) queue.push({ node: item.node.left, level: item.level + 1 })
        if (item.node.right) queue.push({ node: item.node.right, level: item.level + 1 })
    }

    return res.map(arr => {
        const sum = arr.reduce((acc, curr) => acc + curr)
        return Math.floor(sum / arr.length)
    })
}