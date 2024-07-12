const isUnivalued = root => {
    if (!root) return true;
    const data = root.data;

    return (function recurse(root) {
        if (!root) return true;
        if (root.data !== data) return false;
        return recurse(root.left) && recurse(root.right);
    })(root)
};