const sumLeftLeaves = root => {
    if (!root) return 0;
    const leftLeaves = [];

    (function recurse(root) {
        if (root.left) {
            if (!root.left.left && !root.left.right) {
                leftLeaves.push(root.left.data);
            } else {
                recurse(root.left);
            }
        }
        if (root.right) recurse(root.right);
    })(root);

    return leftLeaves.length ? leftLeaves.reduce((acc, curr) => acc + curr) : 0;
}