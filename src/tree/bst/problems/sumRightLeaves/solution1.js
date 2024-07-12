const sumRightLeaves = root => {
    if (!root) return 0;
    let sum = 0;

    (function recurse(root) {
        if (!root) return 0;
        if (root.right) {
            if (!root.right.right) sum += root.right.data; 
            recurse(root.right);
        }

        if (root.left) recurse(root.left);
        return sum;
    })(root)

    return sum;
}