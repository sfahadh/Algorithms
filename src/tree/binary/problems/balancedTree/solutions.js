//? Solution #1
const solutionOne = root => {
    let isbalanced = true;

    (function recurse(root) {
        if (!root) return 0;
        const left = recurse(root.left);
        const right = recurse(root.right);

        if (Math.abs(left - right) > 1) isbalanced = false;
        return Math.max(left, right) + 1;
    })(root)

    return isbalanced;
}