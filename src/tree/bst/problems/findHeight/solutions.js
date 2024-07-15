//? Solution #1
const solutionOne = (root, node) => {
    if (!root) return 0
    let sum = 0
    let foundNode = false;
    
    const recurse = root => {
        if (!root) return 0;
        if (node < root.data) sum += recurse(root.left) + 1;
        if (node > root.data) sum += recurse(root.right) + 1;
        if (root.data === node) foundNode = true;
        return sum;
    }

    const total = recurse(root);
    return foundNode ? total + 1 : 0;
}

//? Solution #2
const solutionTwo = (root, node, level = 0) => {
	if (!root) return 0
	if (root.data === node) return level + 1

	const left = solutionTwo(root.left, node, level + 1)
	const right = solutionTwo(root.right, node, level + 1)
	return left || right
}