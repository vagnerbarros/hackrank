const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node) {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {

    let node1 = headA;
    while(node1){
        let node2 = headB;
        while(node2){
            if(node2 === node1){
                return node1.data;
            }
            node2 = node2.next;
        }
        node1 = node1.next;
    }
}

function main() {
    
    let arr1 = [1, 2, 3, 4, 5];
    let llist1 = new SinglyLinkedList();
    for (let i = 0; i < arr1.length; i++) {
        llist1.insertNode(arr1[i]);
    }

    let arr2 = [4, 3, 5, 6, 7];
    let llist2 = new SinglyLinkedList();
    for (let i = 0; i < arr2.length; i++) {
        llist2.insertNode(arr2[i]);
    }
    
    let ptr1 = llist1.head;
    let ptr2 = llist2.head;
    let index = 2;

    for (let i = 0; i < arr1.length; i++) {
        if (i < index) {
            ptr1 = ptr1.next;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (i != arr2.length - 1) {
            ptr2 = ptr2.next;
        }
    }

    ptr2.next = ptr1;

    let result = findMergeNode(llist1.head, llist2.head);
    console.log(result);

}
