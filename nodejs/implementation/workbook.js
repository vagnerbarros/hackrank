// Complete the workbook function below.
function workbook(n, k, arr) {

    let special = 0;
    let page = 1;
    for(let chapter = 1; chapter <= arr.length; chapter++){
        let problems = arr[chapter - 1];
        let pagesChapter = Math.ceil(problems / k);
        let firstProblem = 1;
        for(let j = 1; j <= pagesChapter; j++){
            
            let lastProblem = 0;
            if(firstProblem + k - 1 <= problems){
                lastProblem = firstProblem + k - 1;
            }
            else{
                let remain = problems - ((j - 1) * k);
                // console.log(remain)
                if(remain === 0){
                    lastProblem = firstProblem;
                }
                else{
                    lastProblem = firstProblem + remain - 1;
                }
            }
            if(page >= firstProblem && page <= lastProblem){
                special++;
            }
            page++;
            firstProblem = lastProblem + 1;
        }
    }
    return special;
}

function main() {


    let n = 5;
    let k = 3;
    let arr = [4, 2, 6, 1, 10];

    let result = workbook(n, k, arr);
    console.log(result);
}

main();