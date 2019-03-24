
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

};

function printSinglyLinkedList(node) {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {

    let node = new SinglyLinkedListNode(data);
    if(!head){
        head = node;
        return head;
    }
    else{
        node.next = head;
        return node;
    }
}

function main() {
    
    let arr = [11, 22, 33, 44];
    let llist = new SinglyLinkedList();

    for (let i = 0; i < arr.length; i++) {
    	const llist_head = insertNodeAtHead(llist.head, arr[i]);
      	llist.head = llist_head;
    }

    printSinglyLinkedList(llist.head);
}

main();