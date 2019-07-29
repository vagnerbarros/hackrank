class HashTable {

  constructor(size){
    this.size = size;
    this.store = [];
  }

  set(key){

    let index = this.hash(key);
    if(!this.store[index]){
      this.store[index] = [];
    }
    this.store[index].push(1);
  }

  get(key){

    let index = this.hash(key);
    if(!this.store[index]){
      return null;
    }
    else{
      return this.store[index][0];
    }
  }

  hash(key){
    
    let value = key.charCodeAt();
    return value % this.size;
  }
}

function twoStrings(s1, s2) {

  let table = new HashTable(26);
  for(let i = 0; i < s1.length; i++){
    table.set(s1[i]);
  }

  let found = false;
  for(let j = 0; j < s2.length; j++){
    let exist = table.get(s2[j]);
    if(exist){
      found = true;
    }
  }

  if(found){
    return 'YES';
  }
  else{
    return 'NO';
  }
}

function main() {

  const s1 = 'hello';
  const s2 = 'world';

  let result = twoStrings(s1, s2);
  console.log(result);
}

main();