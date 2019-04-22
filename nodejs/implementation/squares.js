// Complete the squares function below.
function squares(a, b) {

    let result = 0;

    let lower = Math.ceil(Math.sqrt(a));
    let high = Math.floor(Math.sqrt(b));

    for(let i = lower; i <= high; i++){
        let value = i * i;
        if(value >= a && value <= b){
            result++;
        }
    }

    return result;
}

function main() {
    
    const a = 24;
    const b = 49;

    let result = squares(a, b);
    console.log(result);
}

main();