// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {

    let fine = 0;
    if(y1 > y2){
        fine = 10000;
    }
    else if(y1 === y2){
        if(m1 > m2){
            fine = 500 * (m1 - m2);
        }
        else if(m1 === m2){
            if(d1 > d2){
                fine = 15 * (d1 - d2);
            }
        }
    }

    return fine;
}

function main() {
    
    let d1 = 24;
    let m1 = 12;
    let y1 = 1898;

    let d2 = 18;
    let m2 = 9;
    let y2 = 1898;

    let result = libraryFine(d1, m1, y1, d2, m2, y2);
    console.log(result);
}

main();
