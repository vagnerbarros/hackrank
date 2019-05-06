
// Complete the howManyGames function below.
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy

    let count = 0;
    let discPrices = prices(p, d, m);
    let currentPrice = p;
    for(let i = 0; i < discPrices.length; i++){
        currentPrice = discPrices[i]
        if(s >= currentPrice){
            s -= currentPrice;
            count++;
        }
        else{
            break;
        }
    }
    if(count === prices.length){
        while(s >= m){
            s -= m;
            count++;
        }
    }

    return count;
}

function prices(p, d, m){

    let prices = [];
    let lastPrice = p;
    while(lastPrice > m){
        prices.push(lastPrice);
        lastPrice -= d;
    }
    return prices;
}

function main() {

    // const p = 100;
    // const d = 1;
    // const m = 1;
    // const s = 99;
    
    const p = 100;
    const d = 0;
    const m = 100;
    const s = 300;

    let answer = howManyGames(p, d, m, s);
    console.log(answer);
}

main();