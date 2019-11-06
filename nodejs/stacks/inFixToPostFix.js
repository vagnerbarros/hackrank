const Stack = require('./stack');

function infixToPostFix(infix){

  let output = '';
  let operations = ['+', '-', '*', '/', '^'];
  let precedences = ['(', ')'];
  const stack = new Stack();
  for(let index = 0; index < infix.length; index++){
    const character = infix[index];
    if(character !== ' '){
      if(!operations.includes(character)){
        output += character;
      }
      else if(precedences.includes(character)){
        stack.push(character);
      }
    }
  }
  return output;
}

function infixToPreFix(infix){


}

function main(){

  let infix1 = 'a + b';
  let result = infixToPostFix(infix1);
  console.log(result);
}

main();