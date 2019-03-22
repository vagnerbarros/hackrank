// Complete the hourglassSum function below.
function hourglassSum(arr) {

    let maximo = -70;
    for(let i = 1; i < 5; i++){
        for(let j = 1; j < 5; j++){
            let soma = arr[i][j] + arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] + arr[i + 1][j] + arr[i + 1][j - 1] + arr[i + 1][j + 1];
            if(soma > maximo){
                maximo = soma;
            }
        }
    }
    return maximo;
}

function main() {
    
    let linha0 = [0, -4, -6, 0, -7, -6];
    let linha1 = [-1, -2, -6, -8, -3, -1];
    let linha2 = [-8, -4, -2, -8, -8, -6];
    let linha3 = [-3, -1, -2, -5, -7, -4];
    let linha4 = [-3, -5, -3, -6, -6, -6];
    let linha5 = [-3, -6, 0, -8, -6, -7];

    let arr = [linha0, linha1, linha2, linha3, linha4, linha5]
    let result = hourglassSum(arr);

    console.log(result)
}

main();