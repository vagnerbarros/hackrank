// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {

    let count = 0;
    let chocolate = Math.floor(n / c);
    let wrappers = 0;
    while(chocolate > 0){
        count += chocolate;
        wrappers += chocolate;
        chocolate = 0;
        
        let conversion = Math.floor(wrappers / m);
        if(conversion > 0){
            chocolate = conversion;
            wrappers = wrappers % m;
        }

    }
    return count;
}

function main() {

    let n = 6;
    let c = 2;
    let m = 2;

    let result = chocolateFeast(n, c, m);
    console.log(result);
}

main();
