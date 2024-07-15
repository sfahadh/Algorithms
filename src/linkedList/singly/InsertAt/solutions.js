//? Solution #1
const solutionOne = (head, node, index) => {
    let position = 0

    if (index === 0) {
        node.next = head
        return node
    } else {
        let curr = head
        while (++position <= index && curr.next) {
            if (position === index) {
                curr.next = node
                node.next = curr.next.next
                break
            } else {
                curr = curr.next
            }
        }

        if (position + 1 === index) {
            curr.next = node
        }

        return head
    }
}