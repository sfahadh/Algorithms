//? Solution #1
const solutionOne = head => {
    let curr = head
    let prev = null

    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

//? Solution #2
const solutionTwo = (head, prev = null) => {
    if (!head) return prev
    const next = head.next
    head.next = prev
    return solutionTwo(next, head)
}