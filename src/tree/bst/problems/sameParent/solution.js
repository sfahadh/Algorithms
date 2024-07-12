const sameParent = (root, n1, n2) => {
    if (!root) return false;

    if (root.left && root.right) {
        if (root.left.data === n1 && root.right.data === n2 ||
            root.left.data === n2 && root.right.data === n1) return true;
    }

    return sameParent(root.left, n1, n2) || sameParent(root.right, n1, n2);
}