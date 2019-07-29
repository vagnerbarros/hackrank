class HashTable {

  constructor(size){
    this.size = size;
    this.store = [];
  }

  set(key, value){

    let index = this.hash(key);
    if(!this.store[index]){
      this.store[index] = [];
    }
    this.store[index].push([key, value]);
  }

  get(key){

    let index = this.hash(key);
    if(!this.store[index]){
      return null;
    }
    else{
      for(let slot of this.store[index]){
        if(slot[0] === key){
          slot[0] = undefined;
          return slot[1];
        }
      }
    }
  }

  hash(key){
    
    let value = 0;
    for(let i = 0; i < key.length; i++){
        value += key.charCodeAt(i);
    }
    return value % this.size;
  }
}

function checkMagazine(magazine, note) {

  let table = new HashTable(5);
  for(let m of magazine){
    table.set(m, m);
  }

  let result = true;
  for(let n of note){
    let found = table.get(n);
    if(!found){
      result = false;
      break;
    }
  }

  if(result){
    console.log('Yes');
  }
  else{
    console.log('No');
  }
}

function main() {
    

    const m = 6;
    const n = 4;

    const magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
    const note = ['two', 'times', 'two', 'is', 'four'];

    // const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
    // const note = ['give', 'one', 'grand', 'today'];

    // const magazine = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
    // const note = ['ive', 'got', 'some', 'coconuts'];

    checkMagazine(magazine, note);
}

main();