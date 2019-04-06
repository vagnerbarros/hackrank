/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    
    let maxValue = -1;
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            let price = keyboards[i] + drives[j];
            if(price <= b){
                if(maxValue < price){
                    maxValue = price;
                }
            }
        }
    }
    return maxValue;
}

function main() {
    
    let b = 10;
    let keyboards = [3, 1];
    let drives = [5, 2, 8];

    let moneySpent = getMoneySpent(keyboards, drives, b);
    console.log(moneySpent);
}

main();