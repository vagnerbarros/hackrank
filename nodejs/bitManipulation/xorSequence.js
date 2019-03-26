function g(x){
    let a = x % 8;
    if(a === 0 || a === 1) return x;
    if(a === 2 || a === 3) return 2;
    if(a === 4 || a === 5) return x + 2;
    return 0;
}

// Complete the xorSequence function below.
function xorSequence(l, r) {

    let result = g(l - 1) ^ g(r);
    return result;
}

function main() {

    const q = 1;
    let l = 15;
    let r = 20;

    for (let qItr = 0; qItr < q; qItr++) {
        
        let result = xorSequence(l, r);
        console.log(result)        
    }
}

main();