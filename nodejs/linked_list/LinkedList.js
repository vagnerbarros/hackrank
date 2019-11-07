class Node{

  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{

  constructor(){
    this.head = null;
    this.tail = null;
  }

  addLast(nodeData){
    const node = new Node(nodeData);
    if(this.head == null){
      this.head = node;
    }
    else{
      this.tail.next = node;
    }
    this.tail = node;
  }

  addFirst(nodeData){
    const node = new Node(nodeData);
    if(this.head == null){
      this.head = node;
      this.tail = node;
    }
    else{
      node.next = this.head;
      this.head = node;
    }
  }

  peekFirst(){
    return this.head;
  }

  peekLast(){
    return this.tail;
  }

  removeFirst(){
    if(this.head == null){
      return null;
    }
    else{
      let item = this.head;
      this.head = this.head.next;
      return item;
    }
  }

  removeLast(){
    if(this.tail == null){
      return null;
    }
    else{
      let current = this.head;
      let temp = this.head;
      while(current.next !== null){
        temp = current;
        current = current.next;
      }
      let result = this.tail;
      this.tail = temp;
      this.tail.next = null;
      return result;
    }
  }

  toArray(){

    let result = [];
    let current = this.head;
    while(current !== null){
      result.push(current.data);
      current = current.next;
    }

    return result;
  }
}

// function main(){

//   let linkedList = new LinkedList();
//   linkedList.addFirst(1);
//   linkedList.addFirst(2);
//   linkedList.addFirst(3);
//   console.log(`Content of List: ${linkedList.toArray()}`);
//   console.log(`First Element: ${linkedList.peekFirst().data}`);
//   console.log(`Last Element: ${linkedList.peekLast().data}`);
  
//   linkedList.addLast(4);
//   linkedList.addLast(5);
//   linkedList.addLast(6);
//   console.log(`Content of List: ${linkedList.toArray()}`);
//   console.log(`First Element: ${linkedList.peekFirst().data}`);
//   console.log(`Last Element: ${linkedList.peekLast().data}`);
  
//   console.log(`Remove First: ${linkedList.removeFirst().data}`);
//   console.log(`Content of List: ${linkedList.toArray()}`);
//   console.log(`First Element: ${linkedList.peekFirst().data}`);
//   console.log(`Last Element: ${linkedList.peekLast().data}`);
//   console.log(`Remove Last: ${linkedList.removeLast().data}`);
//   console.log(`Content of List: ${linkedList.toArray()}`);
//   console.log(`First Element: ${linkedList.peekFirst().data}`);
//   console.log(`Last Element: ${linkedList.peekLast().data}`);
// }


// main();

module.exports = LinkedList;