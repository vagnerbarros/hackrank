// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {

    let count = 0;
    for(let i = 0; i < arr.length - 2; i++){
        for(let  j = i + 1; j < arr.length - 1; j++){
            let ai = arr[i];
            let aj = arr[j];
            let first = aj - ai;
            
            if(first === d){

                for(let k = i + 2; k < arr.length; k++){
    
                    let ak = arr[k];
                    let second = ak - aj;
                    if(first === second && first === d){
                        console.log(i + ', ' + j + ', ' + k);
                        count++;
                    }
                }
            }
        }
    }
    return count;
}

function main() {

    let d = 3;
    let arr = [1, 2, 4, 5, 7, 8, 10];

    let result = beautifulTriplets(d, arr);
    console.log(result);
}

main();
