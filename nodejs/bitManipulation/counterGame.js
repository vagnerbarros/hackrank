// Complete the counterGame function below.
function counterGame(n) {

    let turn = true; // true indicate Louise
    for(let power = 0; power < 65; power++){
        let power2 = Math.pow(2, power);
        if(power2 === n){
            n = n / 2;
            if(n === 1){
                break;
            }
            else{
                power = 0;
                turn = !turn;
            }
        }
        else{
            let nextPower2 = Math.pow(2, power + 1);
            if(n > power2 && n < nextPower2){
                n -= power2;
                if(n === 1){
                    break;
                }
                else{
                    turn = !turn;
                    power = 0;
                }
            }
        }
    
    }
    if(turn){
        return 'Louise';
    }
    else{
        return 'Richard';
    }
}

function main() {


    let tests = [1560834904, 1768820483, 1533726144, 1620434450, 1463674015];
    for(let i = 0; i < tests.length; i++){

        let result = counterGame(tests[i]);
        console.log(result);
    }
    
}

main();
