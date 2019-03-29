function fromFront(n, p){
    
    let result = 0;
    if(n % 2 === 0){
        if(p > 1){
            if(p === n){
                result = n / 2;
            }
            else{
                result = Math.floor(p / 2);
            }
        }
    }
    else{
        result = Math.floor(p / 2);
    }

    return result;
}

function fromBack(n, p){

    let result = 0;
    if(n % 2 === 0){
        if(p === n - 1){
            result = 1;
        }
        else if(p === 1){
            result = n;
        }
        else{
            let dif = n - p;
            result = Math.floor(dif / 2);
        }
    }
    else if(n % 2 === 1){
        if(p === n - 1){
            result = 0;
        }
        else if(p === 1){
            result = n;
        }
        else{
            let dif = n - p;
            result = Math.floor(dif / 2);
        }
    }
    return result;
}

function pageCount(n, p) {

    if(n === 1 || n === 2){
        return 0;
    }
    else{

        let middle = 0;
        if(n % 2 === 0){
            middle = n / 2;
        }
        else{
            middle = (n + 1) / 2       
        }
        
        if(p >= middle){
            return fromBack(n, p);
        }
        else{
            return fromFront(n, p);    
        }
    }
}

function main() {

    const n = 2;
    const p = 1;

    let result = pageCount(n, p);
    console.log(result);
}

main();