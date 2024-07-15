//? Solution #1
const solutionOne = root => {
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

//? Solution #2
const solutionTwo = (root, res = []) => {
    if (!root) return res
    const left = solutionTwo(root.left, res)
    const right = solutionTwo(root.right, res)
    return [ ...left, root.data, ...right ]
}

//? Solution #3
const solutionThree = root => {
    const res = []
    const stack = [root]

    while (stack.length) {
        if (root) {
            while (root) {
                if (root.left) stack.push(root.left)
                root = root.left
            }
        } else {
            const node = stack.pop()
            res.push(node.data)
            if (node.right) stack.push(node.right)
            root = node.right
        }

    }

    return res
}