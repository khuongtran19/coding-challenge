class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    // PUSH
    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // POP
    pop() {
        if (!this.head) return undefined
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // SHIFT
    shift() {
        if (!this.head) return undefined
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead;
    }
    // UNSHIFT
    unshift(val) {
        var newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this
    }
    // GET
    get(index) {
        var count = 0;
        var cur = this.head
        if (index < 0 || index >= this.length) return null;
        while (cur !== index) {
            cur = cur.next;
            count++;
        }
        return count;
    }
    // SET
    set(index, val) {
        var foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // INSERT
    // O(1)
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val)
            return true
        }
        if (index === 0) return this.unshift(val)
        var prev = this.get(index - 1);
        var newNode = new Node(val)
        var temp = prev.next
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // REMOVE
    // depend O(1) or O(n)
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var prev = this.get(index - 1)
        var removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }
    // REVERSE
    reverse() {
        var node = this.head
        this.head = this.tail
        this.tail = node;
        var prev = null;
        var next;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

// Insertion - O(1)
// Removal   - O(1) or O(n)
// Searching - O(n)
// Access    - O(n)

var list = new SinglyLinkedList()
list.push('HELLO')
list.push('SAY')
list.push('GOODBYE')