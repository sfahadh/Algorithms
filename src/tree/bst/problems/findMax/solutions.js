//? Solution #1
const solutionOne = root => {
    if (!root) return 0;
    if (root.right) return solutionOne(root.right);
    return root.data;
}