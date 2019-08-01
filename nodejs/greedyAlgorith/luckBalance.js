function luckBalance(k, contests) {

  let importants = [];
  let balance = 0;
  for(let i = 0; i < contests.length; i++){
    let c = contests[i];
    if(c[1] === 1){
      importants.push(c[0]);
    }
    else{
      balance += c[0];
    }
  }

  importants.sort((a, b) => a - b);

  while(k > 0 && importants.length > 0){
    let max = importants.splice(importants.length - 1, 1);
    balance += max[0];
    k--;
  }

  if(k === 0 && importants.length > 0){
    let sum = importants.reduce((total, current) => total + current, 0);
    balance -= sum;
  }

  return balance;
}

function main() {

  const k = 5;

  let contests = [[13, 1], [10, 1], [9, 1], [8, 1], [13, 1], [12, 1], [18, 1], [13, 1]];
  const result = luckBalance(k, contests);
  console.log(result);
}

main();