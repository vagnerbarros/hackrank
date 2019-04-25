// Complete the acmTeam function below.
function acmTeam(topic) {

    // let occurrence = Array(topic[0].length + 1).fill(0);

    // for(let i = 0; i < topic.length - 1; i++){
    //     for(let j = i + 1; j < topic.length; j++){
    //         let equip = (parseInt(topic[i], 2) | parseInt(topic[j], 2)).toString(2);
            
    //         let count = equip.split('1').length - 1;
    //         occurrence[count]++;
    //     }
    // }
    
    // let index = occurrence.length - 1;
    // while(index >= 0){
    //     if(occurrence[index] > 0){
    //         break;
    //     }
    // }
    // return [index, occurrence[index]];

    let maxSize = 0;
    let maxEquips = 0;
    for(let i = 0; i < topic.length - 1; i++){
        for(let j = i + 1; j < topic.length; j++){
    
            let size = 0;
            for(let k = 0; k < topic[i].length; k++){
                let know = topic[i][k] | topic[j][k];
                size += know;
            }
            if(maxSize < size){
                maxSize = size;
                maxEquips = 1;
            }
            else if(maxSize == size){
                maxEquips++;
            }
        }
    }
    
    return [maxSize, maxEquips];
}

function main() {

    let p1 = '10101';
    let p2 = '11100';
    let p3 = '11010';
    let p4 = '00101';

    let topic = [p1, p2, p3, p4];

    let result = acmTeam(topic);
    console.log(result);
}

main();