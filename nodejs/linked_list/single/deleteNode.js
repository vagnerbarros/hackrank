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

// Complete the deleteNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {

    if(position === 0){
        head = head.next;
        return head;
    }
    
    let current = head;
    let before = head;
    let counter = 0;
    while(current){
        if(counter === position){
            before.next = current.next;
        }
        before = current;
        current = current.next;
        counter++;
    }
    return head;
}

function main() {

    let arr = [1, 2, 5, 3];
    let llist = new SinglyLinkedList();
    for (let i = 0; i < arr.length; i++) {
        llist.insertNode(arr[i]);
    }
    
    let position = 2;
    let llist1 = deleteNode(llist.head, position);

    printSinglyLinkedList(llist1)
}

main();