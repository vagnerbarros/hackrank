
class Queue{

  constructor(){
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enque(item){
    this.queue[this.rear] = item;
    this.rear++;
  }

  deque(){
    if(!this.isEmpty()){
      let item = this.queue[this.front];
      this.front++;
      return item;
    }
    else{
      throw new Error('Queue empty');
    }
  }

  isEmpty(){
    return this.front === this.rear;
  }

  isFull(){
    return false;
  }

  size(){
    return Math.abs(this.front - this.rear);
  }

  peek(){

    if(!this.isEmpty()){
      return this.queue[this.front];
    }
    else{
      throw new Error('Queue empty');
    }
  }
}

module.exports = Queue;