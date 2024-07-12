const postOrder = root => {
    if (!root) return [];
    const results = [];
    const visited = {};
    const arr = [root];

    while (arr.length) {
        const nodeData = arr[0].data;
        if (visited[nodeData]) {
            results.push(nodeData);
            visited[nodeData] = false;
            arr.shift();
        } else {
            visited[nodeData] = true;
            arr.unshift(...arr[0].children);
        }
    }

    return results;
}