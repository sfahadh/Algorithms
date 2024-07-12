const sumLeftLeaves = root => {
    if (!root) return 0;

    if (root.left) {
        if (!root.left.left && !root.left.right) {
            return sumLeftLeaves(root.right) + root.left.data;
        }
    }

    return sumLeftLeaves(root.left) + sumLeftLeaves(root.right);
};