// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {

    let result;
    if(s + m < n){
        result = s + m - 1;
    }
    else{
        if((s + m - 1) % n === 0){
            result = n;
        }
        else{
            result = (s + m - 1) % n;
        }
    }
    return result;
}

function main() {
    
    let n = 3; 
    let m = 6;
    let s = 1;
    let result = saveThePrisoner(n, m, s);
    console.log(result);
}

main();