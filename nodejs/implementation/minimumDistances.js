
// Complete the minimumDistances function below.
function minimumDistances(a) {

    let minimum = 1001;
    for(let i = 0; i < a.length - 1; i++){
        for(let j = i + 1; j < a.length; j++){
            if(a[i] === a[j]){
                let dif = j - i;
                if(dif < minimum){
                    minimum = dif;
                }
            }
        }
    }
    if(minimum === 1001){
        minimum = -1;
    }

    return minimum;
}

function main() {


    // const a = [3, 2, 1, 2, 3];
    // const a = [1, 2, 3, 4, 5];
    const a = [7, 1, 3, 4, 1, 7];

    let result = minimumDistances(a);
    console.log(result);
}

main();