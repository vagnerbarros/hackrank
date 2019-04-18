// Complete the findDigits function below.
function findDigits(n) {

    let result = 0;
    let stringNumber = n + '';
    for(let i = 1; i <= 9; i++){
        if(n % i === 0){
            let ocurrences = findOcurrences(stringNumber, i);
            result += ocurrences;
        }
    }
    return result;
}

function findOcurrences(n, d){
    
    let ocurrences = 0;
    for(let i = 0; i < n.length; i++){
        if(n[i] == d){
            ocurrences++;
        }
    }
    return ocurrences;
}

function main() {

    let n = 12;

    let result = findDigits(n);
    console.log(result);
}

main();