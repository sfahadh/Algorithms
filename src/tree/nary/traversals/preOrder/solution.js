const preOrder = root => {
    const results = [];
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();
        results.push(node.data);
        queue.unshift(...node.children);
    }

    return results;
}