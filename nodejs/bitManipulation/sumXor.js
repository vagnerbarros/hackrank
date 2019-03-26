// Complete the sumXor function below.
function sumXor(n) {

    let num_zeros = 0;
    while (n > 0) {
        if (0 == (n & 0x1))
            num_zeros++;
        n >>= 1;
    }
    
    return Math.pow(2, num_zeros);
}

function main() {

    const n = 5;

    const result = sumXor(n);
    console.log(result);
}

main();