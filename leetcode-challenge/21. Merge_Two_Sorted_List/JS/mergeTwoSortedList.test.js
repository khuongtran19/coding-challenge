const mergeTwoSortedList = require("./mergeTwoSortedList")
const Node = require('../../../linkedlist');

const list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);

const list2 = new Node(1);
list2.next = new Node(3);
list2.next.next = new Node(5);

const list3 = {
    val: 1, next: {
        val: 1, next: {
            val: 2, next: {
                val: 3, next: {
                    val: 3, next: {
                        val: 5, next: null
                    }
                }
            }
        }
    }
}

test('create a new sorted list out of two linked list', () => {
    expect(mergeTwoSortedList(list1, list2)).toEqual(list3);
})