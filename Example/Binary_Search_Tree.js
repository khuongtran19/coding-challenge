class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this
        } else {
            let curr = this.root;
            while (true) {
                if (value === curr.value) return undefined
                if (value < curr.value) {
                    if (curr.left === null) {
                        curr.left = newNode;
                        return this
                    } else {
                        curr = curr.left;
                    }
                } else if (value > curr.value) {
                    if (curr.right === null) {
                        curr.right = newNode;
                        return this
                    } else {
                        curr = curr.right
                    }
                }
            }
        }
    }
    contain(value) {
        let curr = this.root,
            found = false;
        if (this.root === null) return false;
        while (curr && !found) {
            if (value < curr.value) {
                curr = curr.left
            } else if (value > curr.value) {
                curr = curr.right
            } else {
                found = true
            }
        }
        if (found) return undefined
        return curr;
    }

    // BST BFS (Binary Search Tree Breadth First Search)
    BFS() {
        let data = [],
            queue = [],
            node = this.root;
        queue.push(node)
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data;
    }

    // BFS DFS (Binary Search Tree Depth First Search)
    DFSPreOrder() {
        let data = [];
        traverse = (node) => {
            data.push(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return data
    }
    DFSPostOrder() {
        let data = [];
        traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
    DFSInOrder() {
        let data = [];
        traverse = (node) => {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}

// Insertion - O(log n)
// Searching - O(log n)