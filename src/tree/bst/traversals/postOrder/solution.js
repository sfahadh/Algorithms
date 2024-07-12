const postOrder = root => {
    const array = [];
    const recurse = root => {
        if (root === null) return [];
        if (root.left) recurse(root.left);
        if (root.right) recurse(root.right);
        array.push(root.data);
    }
    recurse(root);
    return array;
}