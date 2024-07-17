//? Solution #1
const solutionOne = head => {
    let size = 0

    while (head) {
        size++
        head = head.next
    }

    return size
}