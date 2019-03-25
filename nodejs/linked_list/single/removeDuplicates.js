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

// Complete the removeDuplicates function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {

    if(head){

        let before;
        let current = head;
        while(current){

            if(before && before.data === current.data){
                before.next = current.next;
                current = before.next;
            }
            else{
                before = current;
                current = current.next;
            }
        }

        return head;
    }
}

function main() {


        let arr = [1, 1, 2, 3, 3, 3, 4]
        let llist = new SinglyLinkedList();

        for (let i = 0; i < arr.length; i++) {
            llist.insertNode(arr[i]);
        }

        let llist1 = removeDuplicates(llist.head);

        printSinglyLinkedList(llist1)

}

main();