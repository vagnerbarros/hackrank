function arrayManipulation(n, queries) {

    var array = [];
    var max = 0;
    for (let i = 0; i < n; i++) {
        array[i] = 0;
    }

    for (let i = 0; i < queries.length; i++) {
        array[queries[i][0]-1] += queries[i][2];
        if (queries[i][1] < array.length) {
            array[queries[i][1]] -= queries[i][2];
        }
    }
    for (let j = 1; j < n; j++) {
        array[j] += array[j-1];
    }
    
    array.forEach(item => {
        if(item > max){
            max = item;
        }
    })
    
    return max;
}

function main() {
    
    let n = 3;
    let m = 5;
    let q1 = [1, 2, 100];
    let q2 = [2, 5, 100];
    let q3 = [3, 4, 100];
    let queries = [q1, q2, q3];
    
    let result = arrayManipulation(m, n, queries);
    console.log(result);
}

main();