// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {

    let result = '';

    let distanceA = Math.abs(x - z);
    let distanceB = Math.abs(y - z);

    if(distanceA < distanceB){
        result = 'Cat A';
    }
    else if(distanceA > distanceB){
        result = 'Cat B';
    }
    else{
        result = 'Mouse C';
    }

    return result;
}

function main() {
    
    const q1 = [1, 2, 3];
    const q2 = [1, 3, 2];
    const tests = [q1, q2]
    for(let i = 0; i < tests.length; i++){

        const x = tests[i][0];
        const y = tests[i][1];
        const z = tests[i][2];
    
        let result = catAndMouse(x, y, z);
        console.log(result);
    }
}

main(); 