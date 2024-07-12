const twoSum = (root, sum, hashmap = {}) => {
    if (!root) return false;
    const found = hashmap[sum - root.data];

    if (found) {
        if (found + root.data === sum) return true;
    } else {
        hashmap[root.data] = root.data;
    }

    return twoSum(root.left, sum, hashmap) || twoSum(root.right, sum, hashmap);
}