const addTwoNumbers = require("./addTwoNumbers")
const Node = require('../../../NodeSinglyLinkedList')

const list1 = new Node(2)
list1.next = new Node(4)
list1.next.next = new Node(3)

const list2 = new Node(5)
list2.next = new Node(6)
list2.next.next = new Node(4)

const list3 = {
    val: 7, next: {
        val: 0, next: {
            val: 8, next: null
        }
    }
}

test('Add two numbers', () => {
    expect(addTwoNumbers(list1, list2)).toEqual(list3)
})