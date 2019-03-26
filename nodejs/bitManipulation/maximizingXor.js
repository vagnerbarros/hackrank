// Complete the maximizingXor function below.
function maximizingXor(l, r) {

    let max = -1;
    for(let a = l; a >= l && a <= r; a++){
        for(let b = l; b >= l && b <= r; b++){
            let xor = a ^ b;
            if(xor > max){
                max = xor;
            }
        }
    }
    return max;
}

function main() {
    

    const l = 11;
    const r = 100;

    let result = maximizingXor(l, r);
    console.log(result);
}

main();