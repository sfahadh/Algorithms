const findHeight = (root, node) => {
    let sum = 0
    if (!root) {
        return sum;
    } else {
        let foundNode = false;
        const recurse = root => {
            if (!root) return 0;
            if (node < root.data) sum += recurse(root.left) + 1;
            if (node > root.data) sum += recurse(root.right) + 1;
            if (root.data === node) foundNode = true;
            return sum;
        }
        const total = recurse(root);
        return foundNode ? total + 1 : 0;
    }
}