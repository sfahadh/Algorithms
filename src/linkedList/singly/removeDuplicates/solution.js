const removeDuplicates = linkedList => {
    let curr = linkedList.head;
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

    return linkedList;
}