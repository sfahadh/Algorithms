const mergeTrees = (root1, root2) => {
    if (!root1 || !root2) return root1 || root2;
    root1.data += root2.data;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
};