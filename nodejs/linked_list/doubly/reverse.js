const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node) {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

// Complete the reverse function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {

    if(head){

        let reverse = new DoublyLinkedList();

        let arr = [];
        let node = head;
        while(node){
            arr.unshift(node.data);
            node = node.next;
        }

        for(let i = 0; i < arr.length; i++){
            reverse.insertNode(arr[i]);
        }
        return reverse.head;
    }
}

function main() {
    
    let arr = [1, 2, 3, 4, 5];
    let llist = new DoublyLinkedList();

    for (let i = 0; i < arr.length; i++) {
        llist.insertNode(arr[i]);
    }

    let llist1 = reverse(llist.head);
    printDoublyLinkedList(llist1)
}

main();