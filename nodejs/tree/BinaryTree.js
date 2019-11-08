
class Node{

  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{

  constructor(){
    this._root = null;
  }

  insert(data){

    let node = new Node(data);
    
    if(this._root === null){
      this._root = node;
    }
    else{

      let current = this._root;
      while(current !== null){
        if(current.data > node.data){
          if(current.left === null){
            current.left = node;
            break;
          }
          else{
            current = current.left;
          }
        }
        else if(current.data < node.data){
          if(current.right === null){
            current.right = node;
            break;
          }
          else{
            current = current.right;
          }
        }
      }
    }
  }

  search(data){

    let current = this._root;
    while(current !== null && current.data !== data){
      if(current.data > data){
        current = current.left;
      }
      else if(current.data < data){
        current = current.right;
      }
    }
    if(current !== null){
      return true;
    }
    else{
      return false;
    }
  }

  remove(){
  }

  preOrder(){
    
    //visit root first, then left in preorder and right in preorder
    this._pre(this._root);
  }

  _pre(node){
    if(node !== null){
      console.log(node.data);
      this._pre(node.left);
      this._pre(node.right);
    }
  }
  
  inOrder(){
    
    //visit left in order, visit node and later right in order
    this._in(this._root);
  }

  _in(node){
    if(node !== null){
      this._in(node.left);
      console.log(node.data);
      this._in(node.right);
    }
  }
  
  postOrder(){
    
    //visit left in postorder, visit right in postorder then the root
    this._post(this._root);
  }

  _post(node){
    if(node !== null){
      this._post(node.left);
      this._post(node.right);
      console.log(node.data);
    }
  }

  max(){
    if(this._root !== null){
      let current = this._root;
      while(current.right !== null){
        current = current.right;
      }
      return current.data;
    }
    else{
      throw new Error('Tree Empty');
    }
  }

  min(){
    if(this._root !== null){
      let current = this._root;
      while(current.left !== null){
        current = current.left;
      }
      return current.data;
    }
    else{
      throw new Error('Tree Empty');
    }
  }
}

// function main(){

//   let numbers = [50, 25, 30, 20, 75, 55, 80];
//   let tree = new BinaryTree();

//   for(let number of numbers){
//     tree.insert(number);
//   }

//   console.log('PreOrder');
//   tree.preOrder();
//   console.log('Inorder');
//   tree.inOrder();
//   console.log('PostOrder');
//   tree.postOrder();

//   console.log(`Search must be true: ${tree.search(50)}`);
//   console.log(`Search must be true: ${tree.search(25)}`);
//   console.log(`Search must be true: ${tree.search(30)}`);
//   console.log(`Search must be true: ${tree.search(20)}`);
//   console.log(`Search must be true: ${tree.search(75)}`);
//   console.log(`Search must be true: ${tree.search(55)}`);
//   console.log(`Search must be true: ${tree.search(80)}`);

//   console.log(`Search must be false: ${tree.search(90)}`);
//   console.log(`Search must be false: ${tree.search(10)}`);
  

//   console.log(`The max number in tree is ${tree.max()}`);
//   console.log(`The min number in tree is ${tree.min()}`);
// }

// main();

module.exports = BinaryTree;