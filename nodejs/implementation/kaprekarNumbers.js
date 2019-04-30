// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {

    let result = '';
    for(let n = p; n <= q; n++){

        let d = n.toString().length;
        let square = Math.pow(n, 2);

        let numberStr = square.toString();
        let r = numberStr.substr(numberStr.length - d);
        let l = numberStr.substr(0, numberStr.length - d);
        
        let nr = parseInt(r);
        let nl = l.length > 0 ? parseInt(l) : 0;
        if(nr > 0){
            let sum = nl + nr;
            if(sum == n){
                result = result + n + ' ';
                // console.log(n + ' (square=' + square + ', d=' + d + ', l=' + l + ', r=' + r + ', sum=' + sum + ')');
            }
        }
    }
    if(result === ''){
        console.log('INVALID RANGE');
    }
    else{
        console.log(result);
    }
}

function main() {

    const p = 400;
    const q = 700;

    kaprekarNumbers(p, q);
}

main();