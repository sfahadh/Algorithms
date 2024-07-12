const findMin = root => {
    if (!root) return null;
    if (root.left) return findMin(root.left);
    return root.data;
}