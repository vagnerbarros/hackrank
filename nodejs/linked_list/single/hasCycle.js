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

// Complete the hasCycle function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function hasCycle(head) {

    if(head){

        let hasCycle = false;
        let pointer = [];
        let node = head;
        while(node){
            let exists = pointer.find(p => p === node);
            if(exists){
                hasCycle = true;
                break;
            }
            else{
                pointer.push(node);
                node = node.next;
            }
        }

        return hasCycle;
    }
}

function main() {


    let arr = [1, 2, 3, 4];
    let llist = new SinglyLinkedList();

    for (let i = 0; i < arr.length; i++) {
        llist.insertNode(arr[i]);
    }
    
    const extra = new SinglyLinkedListNode(6);
    let node = llist.head;
    let counter = 0;
    while(node){
        if(counter === 2){
            extra.next = node;
            break;
        }
        node = node.next;
        counter++;
    }

    llist.insertNode(extra)

    let result = hasCycle(llist.head);
    // printSinglyLinkedList(llist.head)
}

main();