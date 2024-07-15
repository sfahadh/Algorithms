//? Solution #1
const solutionOne = (root, low, high) => {
    if (!root || low > high) return 0;
    let sum = 0;

    if (low <= root.data) sum += root.data + solutionOne(root.left, low, high);
    if (high >= root.data) sum += root.data + solutionOne(root.right, low, high);

    return sum - root.data;
}

//? Solution #2
const solutionTwo = (root, low, high) => {
    if (!root) return 0
    const left = solutionTwo(root.left, low, high)
    const right = solutionTwo(root.right, low, high)

    if (root.data >= low && root.data <= high) {
        return left + right + root.data
    } else {
        return left + right
    }
}