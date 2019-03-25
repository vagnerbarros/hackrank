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

// Complete the sortedInsert function below.

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
function sortedInsert(head, data) {

    let node = new DoublyLinkedListNode(data);
    if(!head){
        head = node;
    }
    else{
        let current = head;
        let added = false;
        while(current){
            if(current.data > node.data){
                if(current.prev){
                    current.prev.next = node;
                    node.prev = current.prev;
                    node.next = current;
                    current.prev = node;
                }
                else{
                    node.next = current;
                    current.prev = node;
                    head = node;    
                }
                added = true;
                break;
            }
            else{
                if(!current.next && !added){
                    current.next = node;
                    node.prev = current;
                    break;
                }
                current = current.next;
            }
        }
    }


    return head;
}

function main() {

    
    const data = 4;
    let arr = [1, 2, 3];
    let llist = new DoublyLinkedList();

    for (let i = 0; i < arr.length; i++) {
        llist.insertNode(arr[i]);
    }

    let llist1 = sortedInsert(llist.head, data);
    printDoublyLinkedList(llist1)
}

main();