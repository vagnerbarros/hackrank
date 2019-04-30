// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {

    let result = 0;
    for(let n = i; n <= j; n++){
        let inv = inverse(n);
        let number = Math.abs(n - inv);
        if(number % k === 0){
            result++;
        }
    }
    return result;
}

function inverse(n){

    let result = '';
    n = n.toString();
    for(let i = n.length - 1; i >= 0; i--){
        result = result + n[i];
    }
    return parseInt(result);
}

function main() {

    const i = 20;
    const j = 23;
    const k = 6;

    let result = beautifulDays(i, j, k);
    console.log(result);
}

main();