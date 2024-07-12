const preOrder = root => {
    const array = [];
    const recurse = root => {
        if (root === null) return [];
        array.push(root.data);
        if (root.left) recurse(root.left);
        if (root.right) recurse(root.right);
    }
    recurse(root);
    return array;
}