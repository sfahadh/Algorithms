//? Solution #1
const solutionOne = (root, n1, n2, parent = null, level = 0, hashmap = {}) => {
    if (!root) return false
    const left = solutionOne(root.left, n1, n2, root, level + 1, hashmap)
    const right = solutionOne(root.right, n1, n2, root, level + 1, hashmap)

    if (!hashmap[level]) hashmap[level] = {}
    hashmap[level][root.data] = parent ? parent.data : null

    if (n1 in hashmap[level] && n2 in hashmap[level]) {
        return hashmap[level][n1] !== hashmap[level][n2]
    }

    return left || right
}