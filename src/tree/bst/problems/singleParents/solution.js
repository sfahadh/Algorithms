const singleParent = root => {
    if (!root) return 0;
    if (root.left && !root.right) return singleParent(root.left) + 1;
    if (!root.left && root.right) return singleParent(root.right) + 1;
    return singleParent(root.left) + singleParent(root.right);
}