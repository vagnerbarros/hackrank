// Complete the poisonousPlants function below.
function poisonousPlants(p) {

    let plants = [];
    plants.unshift(p[0])
    do{
        let dies = 0;

        for(let i = 0; i < p.length; i++){

            if(plants[0] < plant[i]){
                dies++;
            }
            else{
                plants.unshift(p);
            }
        }

    }while(dies = 0);
}

function main() {

    const p = [6, 5, 8, 4, 7, 10, 9]
    let result = poisonousPlants(p);
    console.log(result);
}
