const removeHead = linkedList => {
    linkedList.head = linkedList.head.next;
    return linkedList;
}