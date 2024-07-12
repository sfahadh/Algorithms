const avgLevel = root => {
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
    for (let index of nodeVals) {
        avg.push(Math.floor(index.reduce((acc, curr) => acc + curr) / index.length));
    }

    return avg;
}