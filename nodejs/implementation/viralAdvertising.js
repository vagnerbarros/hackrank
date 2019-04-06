// Complete the viralAdvertising function below.
function viralAdvertising(n) {

    let likes = Math.floor(5 / 2);
    let recipients = likes * 3;
    let total = likes;
    for(let day = 2; day <= n; day++, recipients = likes * 3){
        likes = Math.floor(recipients / 2);
        total += likes;
    }

    return total;
}

function main() {

    const n = 3;

    let result = viralAdvertising(n);
    console.log(result);
}

main();