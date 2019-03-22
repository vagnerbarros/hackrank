
// Complete the rotLeft function below.
function rotLeft(a, d) {

    for(let i = 1; i <= d; i++){
        let removido = a.shift();
        a.push(removido);
    }
    return a;
}

function main() {
    
    let a = [1, 2, 3, 4, 5];
    let d = 4
    const result = rotLeft(a, d);
    console.log(result);
}

main();
