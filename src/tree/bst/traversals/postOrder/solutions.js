//? Solution #1
const solutionOne = root => {
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

//? Solution #2
const solutionTwo = root => {
    if (!root) return []
    const left = solutionTwo(root.left, res)
    const right = solutionTwo(root.right, res)
    return [ ...left, ...right, root.data ]
}

//? Solution #3
const solutionThree = root => {
    if (!root) return []
    const res = []
    const stack = [root]

    while (stack.length) {
        const node = stack.pop()
        root = node

        if (!node.visited) {
            node.visited = true
            stack.push(node)

            if (root.right) stack.push(root.right)
            if (root.left) stack.push(root.left)
        } else {
            res.push(node.data)
        }
    }

    return res
}