// Complete the permutationEquation function below.
function permutationEquation(p) {

    let result = [];
    for(let x = 1; x <= p.length; x++){
        let px = p.indexOf(x) + 1;
        let ppx = p.indexOf(px);
        result.push(ppx + 1);
    }
    return result;
}

function main() {

    const n = 3;
    const p = [4, 3, 5, 1, 2];

    let result = permutationEquation(p);
    console.log(result);
}

main();