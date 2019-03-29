// Complete the maximumToys function below.
function maximumToys(prices, k) {

    prices.sort((a, b) => a - b);
    
    let toys = 0;
    for(let i = 0; i < prices.length; i++){
        if(k >= prices[i]){
            k -= prices[i];
            toys++;
        }
    }
    return toys;
}

function main() {
    
    let k = 50;
    let prices = [1, 12, 5, 111, 200, 1000, 10];
    let result = maximumToys(prices, k);
    console.log(result);
}

main();