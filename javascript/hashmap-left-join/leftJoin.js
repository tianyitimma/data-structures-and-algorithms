'use strict';

const HashTable = require('../code-challenge-30/hashTable');

function leftJoin(hashT1, hashT2) {
  let result = [];

  let buckets = hashT1.map;
  console.log(buckets);
  for(let i=0; i<buckets.length; i++){
    console.log('test');
    if(buckets[i]){
      console.log(`${buckets[i][0][0]}`);
      if(hashT2.contains(`${buckets[i][0][0]}`)){
        result.push([`${buckets[i][0][0]}`,hashT1.get(`${buckets[i][0][0]}`),hashT2.get(`${buckets[i][0][0]}`)]);
        console.log('test1');
      } else {
        result.push([`${buckets[i][0][0]}`,hashT1.get(`${buckets[i][0][0]}`), 'NULL']);
        console.log('test2');
      }
    }
  }


  return console.log(result);
}

let ht1 = new HashTable(20);
let ht2 = new HashTable(20);

ht1.add('fond', 'enamored');
ht1.add('wrath', 'anger');
ht1.add('diligent', 'employed');
ht1.add('outift', 'garb');
ht1.add('guide', 'usher');
ht2.add('fond', 'averse');
ht2.add('wrath', 'delight');
ht2.add('diligent', 'idle');
ht2.add('guide', 'follow');
ht2.add('flow', 'jam');

console.log(ht1.map);

leftJoin(ht1,ht2);

// module.exports = leftJoin;
