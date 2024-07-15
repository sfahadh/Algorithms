//? Solution #1
const solutionOne = (root, n1, n2) => {
    if (!root) return false;

    if (root.left && root.right) {
        const match1 = root.left.data === n1 && root.right.data === n2
        const match2 = root.right.data === n1 && root.left.data === n2
        if (match1 || match2) return true
    }

    return solutionOne(root.left, n1, n2) || solutionOne(root.right, n1, n2);
}