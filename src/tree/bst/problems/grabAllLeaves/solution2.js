const grabAllLeaves = root => {
    const results = [];

    (function dfs(root) {
        if (!root) return null;
        if (root.left) dfs(root.left);
        if (root.right) dfs(root.right);
        if (!root.left && !root.right) results.push(root.data);
        return;
    })(root)

    return results;
}