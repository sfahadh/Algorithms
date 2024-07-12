const sumAllNodes = root => {
    if (!root) return 0;
    return root.data + sumAllNodes(root.left) + sumAllNodes(root.right);
}