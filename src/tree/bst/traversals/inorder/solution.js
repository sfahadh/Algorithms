const inOrder = root => {
    const array = [];
    const recurse = root => {
        if (root === null) return [];
        if (root.left) recurse(root.left);
        array.push(root.data);
        if (root.right) recurse(root.right);
    }
    recurse(root);
    return array;
}