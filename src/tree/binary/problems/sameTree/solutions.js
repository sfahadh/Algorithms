//? Solution #1
const solutionOne = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.data !== root2.data) return false;
    return solutionOne(root1.left, root2.left) && solutionOne(root1.right, root2.right);
};