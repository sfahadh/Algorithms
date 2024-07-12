const removeLeaf = (root, leaf) => {
    if (root === null) return root;
    if (root && !root.left && !root.right && root.data === leaf) return null;

    if (root.left) {
        if (root.left.data === leaf) {
            root.left = null;
            return root;
        } else {
            removeLeaf(root.left, leaf);
        }
    }

    if (root.right) {
        if (root.right.data === leaf) {
            root.right = null;
            return root;
        } else {
            removeLeaf(root.right, leaf);
        }
    }

    return root;
}