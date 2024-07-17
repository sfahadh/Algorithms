//? Solution #1
const solutionOne = head => {
    let curr = head;
    let prev = curr;

    const hashmap = {};
    hashmap[curr.data] = 1;
    curr = curr.next;

    while (curr) {
        if (hashmap.hasOwnProperty(curr.data)) {
            if (!curr.next) prev.next = null;
        } else {
            hashmap[curr.data] = 1;
            prev.next = curr;
            prev = prev.next;
        }

        curr = curr.next;
    }

    return head;
}

//? Solution #2
const solutionTwo = head => {
    if (!head) return null

    const set = new Set()
    let curr = head

    while (curr) {
        set.add(curr.data)
        let temp = curr.next

        while (temp && set.has(temp.data)) {
            temp = temp.next
        }

        curr.next = temp
        curr = curr.next
    }

    return head
}