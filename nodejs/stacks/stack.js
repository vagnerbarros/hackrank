class Stack {

    constructor(){
      this.stack = [];
      this.top = -1;
    }
  
    push(item){
      this.top++;
      this.stack[this.top] = item;
    }
  
    pop(){
      if(!this.isEmpty()){
        let item = this.stack[this.top];
        this.top--;
        return item;
      }
      else{
        throw new Error('Stack empty');
      }
    }
  
    peek(){
      if(!this.isEmpty()){
        return this.stack[this.top];
      }
      else{
        throw new Error('Stack empty');
      }
    }
  
    isEmpty(){
      return this.top < 0;
    }
  }
  
  module.exports = Stack;