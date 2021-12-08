'use strict';

const leftJoin = require('../hashmap-left-join/leftJoin');
const HashTable = require('../code-challenge-30/hashTable');

describe('testing the left join', () => {
  it('should return 5 sets of output', () => {
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

    expect(leftJoin(ht1, ht2).length).toBe(5);
  });



});
