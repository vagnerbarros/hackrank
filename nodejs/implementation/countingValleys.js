// Complete the countingValleys function below.
function countingValleys(n, s) {

    let path = s.split('');
    let nivel = 0;
    let result = 0;
    path.forEach(step => {
        if(step === 'U'){
            ++nivel;
            if(nivel === 0){
                result++;
            }
        }
        else if(step === 'D'){
            --nivel;
        }
    })
    return result;
}

function main() {
    
    let n = 8;
    let s = 'UDDDUDUU';
    let result = countingValleys(n, s);
    console.log(result);
}

main();