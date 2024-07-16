//? Solution #1
const solutionOne = root => {
    if (!root) return null;

    let temp = root.left;
    root.left = solutionOne(root.right);
    root.right = solutionOne(temp);

    return root;
};