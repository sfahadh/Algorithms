//? Solution #1
const solutionOne = (root, node) => {
    if (!root) root = node;

    if (node.data < root.data) {
        if (root.left) solutionOne(root.left, node);
        else root.left = node;
    }

    if (node.data > root.data) {
        if (root.right) solutionOne(root.right, node);
        else root.right = node;
    }

    return root;
}

//? Solution #2
const solutionTwo = (root, node) => {
    if (!root) return node
    let hasAdded = false
    
    function recurse(root, node) {
        if (!root) return null

        if (node.data < root.data) {
            if (root.left) {
                recurse(root.left, node)
            } else {
                if (!hasAdded) {
                    root.left = node
                    hasAdded = true
                }
            }
        } else {
            if (root.right) {
                recurse(root.right, node)
            } else {
                if (!hasAdded) {
                    root.right = node
                    hasAdded = true
                }
            }
        }
    }

    recurse(root, node)
    return root
}