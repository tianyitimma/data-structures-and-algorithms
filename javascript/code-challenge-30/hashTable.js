'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let sum = 0;
    for(let i=0; i <key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return (sum * 599) % this.size;
  }

  add(key, value) {
    let index = this.hash(key);

    let bucket = this.map[index];

    if(bucket) {
      //update the value if the key exist
      let inserted = false;
      for (let i=0; i<bucket.length; i++) {
        if(bucket[i][0] === key) {
          bucket[i][1] = value;
          inserted = true;
        }
      }
      if (!inserted) {
        bucket.push([key,value]);
        // console.log(bucket);
      }
    } else {
      this.map[index] = [[key, value]];
      //console.log(bucket);
    }
  }

  get(key){
    let index = this.hash(key);
    let bucket = this.map[index];
    if( bucket === undefined) {
      return undefined;
    } else {
      for(let i=0; i<bucket.length; i++){
        if(bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
  }

  contains(key){
    let index = this.hash(key);
    let bucket = this.map[index];
    if (bucket === undefined){
      return false;
    } else {
      for(let i=0; i<bucket.length; i++){
        if(bucket[i][0] === key){
          return true;
        }
      }
      return false;
    }

  }
}

module.exports = HashTable;

// let table = new HashTable(20);

// table.add('tim', 'student1');
// table.add('jim', 'student2');
// table.add('tom', 'student3');
// table.add('sam', 'student4');
// table.add('jacob', 'student5');
// table.add('jimmy', 'student6');

// console.log(table.hash('tim'));
// console.log(table.map);
// console.log(table.contains('jimmy'));
// console.log(table.get('jimmy'));
// console.log(table.get('tommy'));

