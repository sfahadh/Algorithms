//? Solution #1
const removeMid = head => {
    const mid = Math.floor(linkedListLength(linkedList) / 2);
    let count = 0;
    let curr = head;
    let prev = curr;

    while (curr) {
        if (count === mid) {
            prev.next = curr.next;
            curr.next = null;
            break;
        }

        count++;
        prev = curr;
        curr = curr.next;
    }

    return linkedList;
}

const linkedListLength = head => {
    let count = 0;
    let curr = head;

    while (curr) {
        count++;
        curr = curr.next;
    }

    return count;
}