const rangeSum = (root, low, high) => {
    if (!root || low > high) return 0;
    let sum = 0;
    if (low <= root.data) sum += root.data + rangeSum(root.left, low, high);
    if (high >= root.data) sum += root.data + rangeSum(root.right, low, high);
    return sum - root.data;
}