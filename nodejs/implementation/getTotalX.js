function mdc2Numberos(a, b) {
    while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function mdcArray(a) {
    let resultado = a[0];
    for (let i = 1; i < a.length; i++) {
        resultado = mdc2Numberos(resultado, a[i]);
    }
    return resultado;
}

function mmc2Numeros(a, b) {
    return a * (b / mdc2Numberos(a, b));
}

function mmcArray(a) {
    let resultado = a[0];
    for (let i = 1; i < a.length; i++) {
        resultado = mmc2Numeros(resultado, a[i]);
    }
    return resultado;
}

/*
 * Complete the getTotalX function below.
 */
function getTotalX(a, b) {
    /*
     * Write your code here.
     */
    let mmcA = mmcArray(a);
    let mdcB = mdcArray(b);
    let resultado = 0;
    for(let i = mmcA, j = 2; i <= mdcB; i = j * mmcA, j++){
        if(mdcB % i === 0){
            resultado++
        }
    }
    return resultado;
}

function main() {
    
    
    let a = [2];
    let b = [20, 30, 12];

    let total = getTotalX(a, b);
    console.log(total);
}

main();