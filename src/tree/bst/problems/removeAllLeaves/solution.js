const removeAllLeaves = root => {
    if (!root) return null;
    if (root && !root.left && !root.right) return null;

    if (root.left) {
        if (!root.left.left && !root.left.right) root.left = null;
        else removeAllLeaves(root.left);
    }

    if (root.right) {
        if (!root.right.left && !root.right.right) root.right = null;
        else removeAllLeaves(root.right);
    }

    return root;
}