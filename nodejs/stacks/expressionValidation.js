const Stack = require('./stack');

function expressisonValidation(expression){

  let stack = new Stack();
  for(let index = 0; index < expression.length; index++){
    if(expression[index] === '('){
      stack.push(expression[index]);
    }
    else if(expression[index] === ')'){
      if(stack.isEmpty()){
        return false;
      }
      else{
        let character = stack.pop();
        if(character !== '('){
          return false;
        }
      }
    }
  }

  if(stack.isEmpty()){
    return true;
  }
  else{
    return false;
  }
}

function main(){

  let expression1 = '( a + b ) = (b + c)';
  let expression2 = '( 2 * ( c + d ) + b )';
  let expression3 = ') a + b )';
  let expression4 = ') a + b (';
  let expression5 = '( a + b (';
  let expression6 = '( a + ) 2 / 3 ( )';
  let expression7 = 'a + ) + ( c + d ) + (';
  let result = expressisonValidation(expression7);
  console.log(result);
}

main();