//? Solution #1
const solutionOne = (head, node) => {
    if (!head) return node
    let curr = head

    while (curr.next) {
        curr = curr.next
    }

    curr.next = node
    return head
}