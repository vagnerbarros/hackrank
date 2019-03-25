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

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {

    let llist3 = new SinglyLinkedList();
    
    if(!head1 && head2){
        return head2;
    }
    
    if(!head2 && head1){
        return head1;
    }
    
    let node1 = head1;
    let node2 = head2;
    let current;
    
    do{
        if(node1 && node2){
            
            if(node1.data <= node2.data){
                current = node1;
                node1 = node1.next;
            }
            else{
                current = node2;
                node2 = node2.next;
            }
        }
        else if(!node1 && node2){
            current = node2;
            node2 = node2.next;
        }else if(!node2 && node1){
            current = node1;
            node1 = node1.next;
        }
        else{
            break;
        }
        llist3.insertNode(current.data);
    }
    while(current);

    return llist3.head;
}

function main() {
    

    let arr1 = [1, 5, 6];
    let llist1 = new SinglyLinkedList();

    for (let i = 0; i < arr1.length; i++) {
        llist1.insertNode(arr1[i]);
    }
    
    let arr2 = [2, 3, 4];
    let llist2 = new SinglyLinkedList();
    for (let i = 0; i < arr2.length; i++) {
        llist2.insertNode(arr2[i]);
    }

    let llist3 = mergeLists(llist1.head, llist2.head);

    printSinglyLinkedList(llist3)
}

main();