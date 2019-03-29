// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {

    let totalAccount = 0;
    let totalFairAccount = 0;
    for(let i = 0; i < bill.length; i++){
        if(i !== k){
            totalFairAccount += bill[i];
        }
        totalAccount += bill[i];
    }

    totalFairAccount = totalFairAccount / 2;
    totalAccount = totalAccount / 2;
    if(totalFairAccount === b){
        console.log('Bon Appetit');
    }
    else{
        let refund = totalAccount - totalFairAccount;
        console.log(refund);
    }
}

function main() {
    
    let bill = [3, 10, 2, 9];
    let k = 1;
    let b = 12;
    bonAppetit(bill, k, b);
}

main();