const secondHalf = linkedList => {
    let slow = linkedList.head;
    let fast = linkedList.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}