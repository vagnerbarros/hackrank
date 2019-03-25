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

// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {

    let node = new SinglyLinkedListNode(data);
    
    if(!head){
        head = data;
        return head;
    }
    
    let counter = 0;
    let current = head;
    while(current){
        if(counter === position - 1){
            node.next = current.next;
            current.next = node;
            break;
        }
        current = current.next;
        counter++;
    }
    return head;
}

function main() {

    let arr = [1, 2, 4];
    let llist = new SinglyLinkedList();
    for (let i = 0; i < arr.length; i++) {
        llist.insertNode(arr[i]);
    }
    
    let position = 2;
    let data = 3;
    let llist_head = insertNodeAtPosition(llist.head, data, position);

    printSinglyLinkedList(llist_head)
}

main();