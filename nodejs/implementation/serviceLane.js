// Complete the serviceLane function below.
function serviceLane(n, cases, width) {

    let result = [];
    for(let c of cases){
        let start = c[0];
        let end = c[1];
        let min = 4;
        for(let i = start; i <= end; i++){
            if(min > width[i]){
                min = width[i];
            }
        }
        result.push(min);
    }
    return result;
}

function main() {

    let n = 1;
    let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];
    const width = [2, 3, 1, 2, 3, 2, 3, 3];

    let result = serviceLane(n, cases, width);
    console.log(result);
}

main();