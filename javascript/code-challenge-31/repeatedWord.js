'use strict';

const HashTable = require('../code-challenge-30/hashTable');

function repeatedWord(string) {

  let words = string.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
  // console.log(typeof(words));

  let ht = new HashTable(100);
  let i=0;
  while(words[i]){
    let newWord = words[i];
    if(ht.contains(newWord)){
      return newWord;
    } else {
      ht.add(newWord, newWord);
    }
    i++;
  }
  return 'no repeated word';

}

// module.exports = repeatedWord;


let str1 = 'Once upon a time, there was a brave princess who...';

let str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

let str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

console.log(repeatedWord(str1));
console.log(repeatedWord(str2));
console.log(repeatedWord(str3));
