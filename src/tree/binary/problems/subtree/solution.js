const subtree = (root, sub) => {
    if (!root || !sub) return false;
    return compareTree(root, sub) || subtree(root.left, sub) || subtree(root.right, sub);
};

const compareTree = (root, sub) => {
    if (!root && !sub) return true;
    if ((!root && sub) || (root && !sub) || root.data !== sub.data) return false;
    return compareTree(root.left, sub.left) && compareTree(root.right, sub.right);
}