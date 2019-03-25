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

// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {

    
    if(head){
        let rlist = new SinglyLinkedList();

        let arr = [];

        let node = head;
        while(node){
            arr.unshift(node.data);
            node = node.next;
        }

        for(let i = 0; i < arr.length; i++){
            rlist.insertNode(arr[i]);
        }

        return rlist.head;
    }
}

function main() {
    
    let arr = [1, 2, 3, 4, 5];
    let llist = new SinglyLinkedList();

    for (let i = 0; i < arr.length; i++) {
        llist.insertNode(arr[i]);
    }

    let llist1 = reverse(llist.head);

    printSinglyLinkedList(llist1)
}

main();