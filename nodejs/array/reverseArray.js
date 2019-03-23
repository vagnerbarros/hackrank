// Complete the reverseArray function below.
function reverseArray(a) {

    let newA = [];
    while(a.length >= 1){

        newA.push(a.pop());    
    }
    return newA;
}

function main() {

    let arr = [1, 4, 3, 2];

    const res = reverseArray(arr);
    console.log(res);
}

main();