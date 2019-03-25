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

// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {

    if(head){

        let node = head;
        let size = 0;
        while(node){
            size++;
            node = node.next;
        }

        let position = size - positionFromTail - 1;
        
        node = head;
        let counter = 0;
        while(node){
            if(counter === position){
                return node.data;
            }
            counter++;
            node = node.next;
        }
    }
}

function main() {

    let arr = [1, 2, 3, 4, 5];
    let llist = new SinglyLinkedList();

    for (let i = 0; i < arr.length; i++) {
        llist.insertNode(arr[i]);
    }
    
    let position = 3;
    let result = getNode(llist.head, position);
    console.log(result);
}

main();