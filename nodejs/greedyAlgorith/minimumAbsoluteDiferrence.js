function minimumAbsoluteDifference(arr) {


  arr.sort();
  let min = 1000000001;
  for(let i = 0, j = 1; i < arr.length - 1; i++, j++){
    let dif = Math.abs(arr[i] - arr[j]);
    if(dif < min){
      min = dif;
    }
  }
  return min;
}

function main() {

  const arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
  // const arr = [1, -3, 71, 68, 17];
  const result = minimumAbsoluteDifference(arr);
  console.log(result);
}

main();