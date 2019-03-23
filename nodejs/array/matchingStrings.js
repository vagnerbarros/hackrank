function matchingStrings(strings, queries) {

    let result = [];
    for(let i = 0; i < queries.length; i++){
        let query = queries[i];
        let found = strings.filter(string => string === query);
        result.push(found.length);
    }

    return result;
}

function main() {

    let strings = ['aba',
        'baba',
        'aba',
        'xzxb'];
    let queries = ['aba',
        'xzxb',
        'ab'];
    let res = matchingStrings(strings, queries);

    console.log(res.join("\n") + "\n");
}

main();