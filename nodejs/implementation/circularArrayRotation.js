'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = fs.readFileSync('../test/load.txt').toString().split('\n');
let currentLine = 0;

function readLine() {
    let line = inputString[currentLine++]
    return line;
}

// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {

    let newArr = [];
    if(k == a.length){
        newArr = a;
    }
    else{
        if(k > a.length){
            k = k % a.length;
        }

        for(let i = 0; i < a.length; i++){
            let newIndex = (i + k) % a.length;
            newArr[newIndex] = a[i];
        }
    }

    let result = [];
    for(let i = 0; i < queries.length; i++){
        result[i] = newArr[queries[i]];
    }

    return result;
}

function main() {

    const nkq = readLine().split(' ');

    const n = parseInt(nkq[0], 10);

    const k = parseInt(nkq[1], 10);

    const q = parseInt(nkq[2], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let queries = [];

    for (let i = 0; i < q; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    const result = circularArrayRotation(a, k, queries);
    console.log(result);
}

main();