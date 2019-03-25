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

// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {

    if(llist1 ^ llist2){
        return false;
    }

    let result = true;
    let arr1 = [];
    let arr2 = [];

    
    let node1 = llist1;
    while(node1){
        arr1.push(node1.data);
        node1 = node1.next;
    }
    let node2 = llist2;
    while(node2){
        arr2.push(node2.data);
        node2 = node2.next;
    }

    if(arr1.length !== arr2.length){
        result = false;
    }
    else{
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                result = false;
                break;
            }
        }
    }

    return result;
}

function main() {

    let arr1 = [1, 2, 3, 4];
    let arr2 = [1, 2, 3, 4];
    
    let llist1 = new SinglyLinkedList();
    let llist2 = new SinglyLinkedList();
    
    for (let i = 0; i < arr1.length; i++) {
        llist1.insertNode(arr1[i]);
    }
    
    for (let i = 0; i < arr2.length; i++) {
        llist2.insertNode(arr2[i]);
    }

    let result = CompareLists(llist1.head, llist2.head);
    console.log(result);
}

main();