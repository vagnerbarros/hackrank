// Complete the lonelyinteger function below.
function lonelyinteger(a) {

    let v = 0;
    for(let i = 0; i < a.length; i++){
        v = v ^ a[i];
    }

    return v;
}

function main() {


    // let arr = [0, 0, 1, 2, 1];
    let arr = [1, 2, 3, 4, 3, 2, 1];
    // let arr = [0, 1, 2, 3, 2, 3, 1];
    // let arr = [1, 2, 3, 1, 3];
    let result = lonelyinteger(arr);

    console.log(result);
}

main();