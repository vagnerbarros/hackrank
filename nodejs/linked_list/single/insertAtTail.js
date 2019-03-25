const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
    }

};

function printSinglyLinkedList(node) {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

function insertNodeAtTail(head, data) {

    let node = new SinglyLinkedListNode(data);
    if(!head){
        head = node;
        return head;        
    }
    else{
        let tail = head;
        while(tail.next !== null){
            tail = tail.next;
        }
        tail.next = node;
        return head;
    }
}

function main() {
    

    let arr = [10, 22, 15, 23, 33];
    let llist = new SinglyLinkedList();

    for (let i = 0; i < arr.length; i++) {

    	const llist_head = insertNodeAtTail(llist.head, arr[i]);
      	llist.head = llist_head;
    }

    printSinglyLinkedList(llist.head);
}

main();