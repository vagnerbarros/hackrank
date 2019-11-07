const LinkedList = require('../linked_list/LinkedList');

class Queue{

  constructor(){
    this.linkedList = new LinkedList();
    this.size = 0;
  }

  enque(item){
    this.linkedList.addLast(item);
    this.size++;
  }

  deque(){
    this.size--;
    return this.linkedList.removeFirst().data;
  }

  isEmpty(){
    return this.size === 0;
  }

  isFull(){
    return false;
  }

  sizeOfQueue(){
    return this.size;
  }

  peek(){
    return this.linkedList.peekFirst().data;
  }
}

// function main(){

//   let queue = new Queue();

//   console.log(`Start Queue must be empty: ${queue.isEmpty()}`);
//   console.log(`Start Queue must be size 0: ${queue.sizeOfQueue()}`);
//   queue.enque(1);
//   queue.enque(2);
//   queue.enque(3);
//   console.log(`After enque, Queue must be empty: ${queue.isEmpty()}`);
//   console.log(`After insert items, size: ${queue.sizeOfQueue()}`);
  
//   console.log(`First of Queue: ${queue.peek()}`);
//   console.log(`Deque: ${queue.deque()}`);
//   console.log(`Deque: ${queue.deque()}`);
//   console.log(`Deque: ${queue.deque()}`);
//   console.log(`After remove items, Queue must be empty: ${queue.isEmpty()}`);
//   console.log(`After remove items, Queue must be size 0: ${queue.sizeOfQueue()}`);
// }

// main();

module.exports = Queue;