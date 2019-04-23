// Complete the cutTheSticks function below.
function cutTheSticks(arr) {

    let result = [];
    while(arr.length > 0){

        result.push(arr.length);
        arr.sort((a, b) => a - b);
        let min = arr[0];
        for(let i = 0; i < arr.length; i++){
            let result = arr[i] - min;
            if(result === 0){
                arr.splice(i, 1);
                i--;
            }
            else{
                arr[i] = result;
            }
        }
    }
    return result;
}

function main() {

    const arr = [1, 2, 3, 4, 3, 3, 2, 1];
    let result = cutTheSticks(arr);
    console.log(result);
}

main();