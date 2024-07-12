const contains = (root, node) => {
    if (!root) return false;
    if (node === root.data) return true;
    if (node < root.data) return contains(root.left, node);
    if (node > root.data) return contains(root.right, node);
    return false;
}