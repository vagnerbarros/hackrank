// Complete the equalizeArray function below.
function equalizeArray(arr) {

    let ocurrence = Array(101).fill(0);
    for(let i = 0; i < arr.length; i++){
        let value = arr[i];
        ocurrence[value]++;
    }

    let maxRepeat = 0;
    for(let i = 0; i < 101; i++){
        if(ocurrence[i] > maxRepeat){
            maxRepeat = ocurrence[i];
        }
    }

    if(maxRepeat > 1){
        return arr.length - maxRepeat;
    }
    else{
        return arr.length - 1;
    }
}

function main() {

    // const arr = [3, 3, 2, 1, 3];
    // const arr = [1, 2, 2, 3];
    const arr = [1, 2, 3, 4];

    let result = equalizeArray(arr);
    console.log(result);
}

main();