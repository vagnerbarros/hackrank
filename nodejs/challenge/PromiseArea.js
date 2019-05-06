// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
    return new Promise((resolve, reject) => {
        if (shape == 'square') {
            let side = values[0];
            let area = side * side;
            let result = parseFloat(area.toFixed(2));
            resolve(result);
        }
        else if (shape == 'rectangle') {
            let side1 = values[0];
            let side2 = values[1];
            let area = side1 * side2;
            let result = parseFloat(area.toFixed(2));
            resolve(result);
        }
        else if (shape == 'circle') {
            let pi = 3.14;
            let r = values[0];
            let area = pi * (r * r);
            let result = parseFloat(area.toFixed(2));
            resolve(result);
        }
        else if (shape == 'triangle') {
            let b = values[0];
            let h = values[1];
            let area = 0.5 * b * h;
            let result = parseFloat(area.toFixed(2));
            resolve(result);
        } else {
            reject(-1);
        }
    })
}

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, values_arr) => {
    return new Promise(async (resolve, reject) => {
        let areas = [];
        for (let i = 0; i < shapes.length; i++){
            try{

                let area = await calculateArea(shapes[i], values_arr[i]);
                areas.push(area);
            }
            catch(err){
                reject(err)
            }
        }
        resolve(areas);
    })
}

let callCalculateArea = async (shapes, values) => await calculateArea(shapes[0], values[0]).catch(error => error) instanceof Promise;

let callGetAreas = (shapes, values) => getAreas(shapes, values).catch(error => error);

function main() {

    const n = 4

    let shapes = ['square', 'rectangle', 'circle', 'triangls'];
    let values = [[2], [3, 4], [5], [2, 4]];

    if (callCalculateArea(shapes, values)) {
        callGetAreas(shapes, values).then((res) => {
            // console.log(res.join('\n') + '\n');
            console.log(res);
        });
    } else {
        console.error('calculateArea does not return a Promise.');
    }
}

main();