//? Solution #1
const solutionOne = root => {
    if (!root) return 0;
    let level = 1;
    const queue = [root, "level"];
    while (queue.length > 1) {
        const branch = queue.shift();
        if (branch.left && branch !== "level") queue.push(branch.left);
        if (branch.right && branch !== "level") queue.push(branch.right);

        if (!queue.includes("level")) queue.push("level");
        if (branch === "level") {
            level++;
        }
    }
    return level;
}

//? Solution #2
const solutionTwo = root => {
    if (!root) return 0;
    return Math.max(solutionTwo(root.left), solutionTwo(root.right)) + 1;
}