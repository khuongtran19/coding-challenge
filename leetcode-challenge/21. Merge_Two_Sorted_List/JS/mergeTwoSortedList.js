const Node = require('../../../NodeSinglyLinkedList')
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    // create new Node
    const head = new Node(0);
    // set another variable equal to our new node for manipulation
    let cur = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = new Node(l1.val)
            l1 = l1.next
        } else {
            cur.next = new Node(l2.val)
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = l1 || l2
    return head.next;
};

module.exports = mergeTwoLists