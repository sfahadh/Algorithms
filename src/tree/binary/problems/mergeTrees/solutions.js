//? Solution #1
const solutionOne = (root1, root2) => {
    if (!root1 || !root2) return root1 || root2;
    root1.data += root2.data;
    root1.left = solutionOne(root1.left, root2.left);
    root1.right = solutionOne(root1.right, root2.right);
    return root1;
};