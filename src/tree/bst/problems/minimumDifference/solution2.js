const minimumDifference = root => {
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