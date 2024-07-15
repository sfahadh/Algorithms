//? Solution #1
const solutionOne = head => {
    const result = [];
    
    while (head) {
        result.push(head.data);
        head = head.next;
    }

    return result;
}