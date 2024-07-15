//? Solution #1
const solutionOne = root => {
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

//? Solution #2
const solutionTwo = root => {
    if (!root) return []
    const left = solutionTwo(root.left, res)
    const right = solutionTwo(root.right, res)
    return [ root.data, ...left, ...right ]
}

//? Solution #3
const solutionThree = root => {
    if (!root) return []
    const res = []
    const stack = [root]

    while (stack.length) {
        const node = stack.pop()
        res.push(node.data)

        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }

    return res
}