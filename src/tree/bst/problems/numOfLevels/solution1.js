const levels = root => {
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