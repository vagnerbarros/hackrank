// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {

    s = s.split('');
    t = t.split('');
    if(s.length > t.length){
        let del = s.length - t.length;
        s.splice(t.length, del);

        let lastDif = s.length - 1;
        for(let i = s.length - 1, j = i; i >= 0; i--, j--){
            console.log(s[i] + ' == ' + t[j]);
            if(s[i] !== t[j]){
               lastDif = i;
            }
        }
        if(lastDif > 0){
            s = s[];
        }
        console.log(s)
    }
    else if(s.length < t.length){
        for(let i = s.length - 1, j = i; i >= 0; i--, j--){
            console.log(s[i] + ' == ' + t[j]);
            if(s[i] !== t[j]){
               s.splice(i, 1);             
            }
            else{
            }
        }
    }
    else{

        for(let i = s.length - 1; i >= 0; i--){
            if(i < t.length){
    
            }
            
        }
    }
}

function main() {

    const s = 'hackerhappy';
    const t = 'hackerrank';
    const k = 9;

    let result = appendAndDelete(s, t, k);
    console.log(result);
}

main();