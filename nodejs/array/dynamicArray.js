// Complete the dynamicArray function below.
function dynamicArray(n, queries) {

    let seqList = [];
    for(let i = 0; i < n; i++){
        seqList.push([]);
    }
    
    let lastAnswer = 0;
    let result = [];
    for(let i = 0; i < queries.length; i++){
        
        let query = queries[i];
        let number = query[0];
        let x = query[1];
        let y = query[2];

        if(number == 1){
            query1(x, y, lastAnswer, n, seqList);
        }
        else if(number == 2){
            lastAnswer = query2(x, y, lastAnswer, n, seqList);
            result.push(lastAnswer);
        }
    }
    return result;
}

function query1(x, y, lastAnswer, n, seqList){

    let seq = (x ^ lastAnswer) % n;
    seqList[seq].push(y);
}

function query2(x, y, lastAnswer, n, seqList){

    let seq = (x ^ lastAnswer) % n;
    let index = y % seqList[seq].length;
    return seqList[seq][index];
}

function main() {

    let n = 2;
    let q1 = [1, 0, 5];
    let q2 = [1, 1, 7];
    let q3 = [1, 0, 3];
    let q4 = [2, 1, 0];
    let q5 = [2, 1, 1];
    let queries = [q1, q2, q3, q4, q5];

    const result = dynamicArray(n, queries);
    console.log(result.join('\n') + '\n');
}

main();