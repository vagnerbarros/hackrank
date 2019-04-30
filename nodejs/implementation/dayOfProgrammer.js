// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {

    let programmerDay = 256;
    let calendar = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    let calendar1918 = [0, 31, 45, 76, 106, 137, 167, 198, 229, 259, 290, 320, 351];
    let result = '';

    if(year >= 1919){ // gregorian caledar
        let day = programmerDay - calendar[8];
        if(isLeap(year)){
            day--;
        }
        result = day + '.09.' + year;
    }
    else if(year <= 1917){ //julian calendar
        let day = programmerDay - calendar[8];
        if(isLeap(year)){
            day--;
        }
        result = day + '.09.' + year;
    }
    else{
        let day = programmerDay - calendar1918[8] - 1;
        result = day + '.09.' + year;
    }
    return result;
}

function isLeap(year){
    if(year >= 1919){
        if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
            return true;
        }
        else{
            return false;
        }
    }
    else if(year <= 1918){
        if(year % 4 === 0){
            return true;
        }
        else{
            return false;
        }
    }
}

function main() {

    const year = 1918;

    const result = dayOfProgrammer(year);
    console.log(result);
}

main();