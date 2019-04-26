// Complete the taumBday function below.
function taumBday(b, w, bc, wc, z) {

    // fails to big numbers
    if(bc > wc + z){
        let gift = (w + b) * wc;
        let conversion = b * z;
        return gift + conversion;
    }
    else if(wc > bc + z){
        let gift = (b + w) * bc;
        let conversion = (w * z);
        return gift + conversion;
    }
    else{
        return (b * bc) + (w * wc);
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
