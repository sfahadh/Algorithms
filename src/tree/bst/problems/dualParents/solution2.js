const dualParent = (root) => {
    if (!root || !root.left && !root.right) return 0;

    if (root.left && root.right) {
        return dualParent(root.left) + dualParent(root.right) + 1;
    }

    if (root.left) return dualParent(root.left);
    if (root.right) return dualParent(root.right);
}