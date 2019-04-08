// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {

    let result = s;

    let circles = Math.floor(m / n);
    if(circles > 0){
        let rest = (m % n) - 1;
        result = s + rest;
    }
    return result;
}

function main() {
    
    let n = 5; 
    let m = 2;
    let s = 5;
    let result = saveThePrisoner(n, m, s);
    console.log(result);
}

main();