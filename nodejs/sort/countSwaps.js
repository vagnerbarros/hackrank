// Complete the countSwaps function below.
function countSwaps(a) {

    let count = 0;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i + 1] < a[i]) {
                let temp = a[i + 1];
                a[i + 1] = a[i];
                a[i] = temp;
                count++;
                sorted = false;
            }
        }
    }

    console.log('Array is sorted in ' + count + ' swaps.');  
    console.log('First Element: ' + a[0]);  
    console.log('Last Element: ' + a[a.length - 1]);
}

function main() {

    const a = [4, 2, 3, 1];

    countSwaps(a);
}

main();