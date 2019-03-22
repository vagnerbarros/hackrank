function minimumSwaps(arr) {

    let primeiro = 0;
    let ultimo = arr.length - 1;
    let contador = 0;
    while (primeiro < ultimo) {
        while (arr[primeiro] == primeiro + 1 && primeiro < ultimo){
            primeiro++;
        }
        if (primeiro < ultimo) {
            let temp = arr[arr[primeiro] - 1];
            arr[arr[primeiro] - 1] = arr[primeiro];
            arr[primeiro] = temp;
            contador++;
        }
    }
    return contador;
}

function swap(left, right, arr){

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function main() {

    let arr = [2, 3, 4, 1, 5];
    const res = minimumSwaps(arr);

    console.log(res);
}

main();