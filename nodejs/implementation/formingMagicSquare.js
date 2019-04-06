// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {

    let magic = false;
    let lines = [];
    let number = 0;
    while(!magic){
        for(let i = 0; i < 3; i++){
            let sumLine = 0;
            let sumColumn = 0;
            for(let j = 0; j < 3; j++){
                sumLine += s[i][j];
                sumColumn += s[j][i];
            }
            if(sumLine !== 15 && sumColumn !== 15){
                console.log('linha = ' + i + ', total = ' + sumLine);
                console.log('coluna = ' + i + ', total = ' + sumColumn);
            }
            
        }

        magic = true;
    }
}

function main() {

    // let s1 = [4, 9, 2];
    // let s2 = [3, 5, 7];
    // let s3 = [8, 1, 5];

    let s1 = [4, 8, 2];
    let s2 = [4, 5, 7];
    let s3 = [6, 1, 6];

    let s = [s1, s2, s3];

    const result = formingMagicSquare(s);
    console.log(result);
}

main();