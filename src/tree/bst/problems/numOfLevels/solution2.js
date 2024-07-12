const levels = root => {
    if (!root) return 0;
    return Math.max(levels(root.left), levels(root.right)) + 1;
}