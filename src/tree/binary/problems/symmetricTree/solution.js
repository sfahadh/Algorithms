const symmetric = root => {
    if (!root) return true;
    return traverse(root.left, root.right)
};

const traverse = (left, right) => {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.data !== right.data) return false;
    return traverse(left.left, right.right) && traverse(left.right, right.left);
}