function minimumBribes(q) {

    let contador = 0;
    let subornos = Array.from(Array(q.length + 1), () => 0);
    
    while(!estaOrdenado(q)){

        for(let i = 1; i < q.length; i++){
            let anterior = q[i - 1];
            let atual = q[i];
            if(anterior > atual){
                q[i - 1] = atual;
                q[i] = anterior;
                subornos[anterior]++;
    
                contador++;
                if(subornos[anterior] > 2 || subornos[atual] > 2){
                    return 'Too chaotic';
                }
            }
        }
    }
    return contador;
}

function estaOrdenado(q){

    let ordenado = true;
    for(let i = 1; i < q.length; i++){
        if(q[i - 1] > q[i]){
            ordenado = false;
        }
    }
    return ordenado;
}

function main() {
    

    let q = [1, 2, 5, 3, 7, 8, 6, 4];
    let resultado = minimumBribes(q);
    console.log(resultado);
}

main();