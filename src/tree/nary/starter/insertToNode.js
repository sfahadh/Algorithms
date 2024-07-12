const insertToNode = (parent, children) => {
    for (let child of children) {
        parent.insert(child);
    }
}

module.exports = insertToNode;