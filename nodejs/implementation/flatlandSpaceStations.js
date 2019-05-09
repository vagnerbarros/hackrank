// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {

    let stations = Array(n).fill(0);
    for(let i = 0; i < c.length; i++){
        stations[c[i]] = 1;
    }

    let distances = Array(n).fill(0);
    for(let i = 0; i < c.length; i++){

        let currentStation = c[i];
        for(let j = 0; j < stations.length; j++){
            if(currentStation !== j){
                let distance = Math.abs(currentStation - j);
                if(distances[j] === 0 || (distances[j] !== 0 && distance < distances[j])){
                    distances[j] = distance;
                }
            }
        }
    }

    let max = 0;
    for(let i = 0; i < stations.length; i++){
        if(stations[i] === 0){
            if(distances[i] > max){
                max = distances[i];
            }
        }
    }
    return max;
}

function main() {

    // let n = 5;
    // let c = [0, 4];
    
    let n = 6;
    let c = [0, 1, 2, 3, 4, 5];

    let result = flatlandSpaceStations(n, c);
    console.log(result);
}

main();