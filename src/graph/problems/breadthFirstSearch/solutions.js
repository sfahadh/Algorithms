const breadthFirstSearch = (adjacencyList, start) => {
    if (!start) return []
    const queue = [start]
    const res = []
    const visited = new Set()

    while (queue.length) {
        const node = queue.shift()
        if (visited.has(node)) continue

        visited.add(node)
        res.push(node)

        if (adjacencyList[node]) {
            adjacencyList[node].forEach((vertix) => {
                queue.push(vertix)
            })
        }
    }

    return res
}
