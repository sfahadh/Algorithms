const removeNode = (root, nodeData) => {
    if (!root || root.data === nodeData) return null;

    if (root.left && nodeData <= root.left.data) {
        if (root.left.data === nodeData) root.left = null;
        else removeNode(root.left, nodeData);
    }

    if (root.right && nodeData >= root.right.data) {
        if (root.right.data === nodeData) root.right = null;
        else removeNode(root.right, nodeData);
    }

    return root;
}