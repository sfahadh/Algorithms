const insertNode = (root, node) => {
    if (!root) root = node;

    if (node.data < root.data) {
        if (root.left) insertNode(root.left, node);
        else root.left = node;
    }

    if (node.data > root.data) {
        if (root.right) insertNode(root.right, node);
        else root.right = node;
    }

    return root;
}