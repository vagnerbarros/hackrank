
function main(){

    let r = 4;
    let a = [1, 2, 3, 4, 5]

    let newA = [];
    for(let i = 0; i < r; i++){
        newA.push(a.shift());
    }
    a.push(...newA);
}

main();