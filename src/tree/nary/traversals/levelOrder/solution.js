const levelOrder = root => {
    const result = [];
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();
        result.push(node.data);
        queue.push(...node.children)
    }

    return result;
}