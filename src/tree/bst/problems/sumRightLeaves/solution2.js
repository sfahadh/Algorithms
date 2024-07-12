const sumRightLeaves = root => {
    if (!root) return 0;

    if (root.right) {
        if (!root.right.left && !root.right.right) {
            return root.right.data + sumRightLeaves(root.left);
        }
    }

    return sumRightLeaves(root.left) + sumRightLeaves(root.right);
}