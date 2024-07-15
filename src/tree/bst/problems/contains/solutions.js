//? Solution #1
const solutionOne = (root, node) => {
    if (!root) return false;
    if (node === root.data) return true;
    if (node < root.data) return solutionOne(root.left, node);
    if (node > root.data) return solutionOne(root.right, node);
    return false;
}