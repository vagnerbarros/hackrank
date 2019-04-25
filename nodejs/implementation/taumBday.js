// Complete the taumBday function below.
function taumBday(b, w, bc, wc, z) {

    if(bc > wc + z){
        let gift = ((Number(w) + Number(b)) * Number(wc));
        let conversion = Number(b) * Number(z);
        return Number(gift) + Number(conversion);
    }
    else if(wc > bc + z){
        let gift = ((Number(b) + Number(w)) * Number(bc));
        let conversion = (Number(w) * Number(z));
        return Number(gift) + Number(conversion);
    }
    else{
        return (Number(b) * Number(bc)) + (Number(w) * Number(wc));
    }
}

function main() {

    const b = 742407782;
    const w = 90529439;
    const bc = 847666641;
    const wc = 8651519;
    const z = 821801924;

    let result = taumBday(b, w, bc, wc, z);
    console.log(result);
}

main();
