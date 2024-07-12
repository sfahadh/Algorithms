const findMax = root => {
    if (!root) return null;
    if (root.right) return findMax(root.right);
    return root.data;
}