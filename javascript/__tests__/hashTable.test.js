'use strict';

const HashTable = require('../code-challenge-30/hashTable');

describe('testing the hash table', () => {
  it('1. Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let ht = new HashTable(30);

    ht.add('key', 'value');

    expect(ht.map[ht.hash('key')]).toBeTruthy();
  });

  it('2. Retrieving based on a key returns the value stored', () =>{
    let ht = new HashTable(30);
    ht.add('key', 'value');

    expect(ht.get('key')).toBe('value');
  });

  it('3. Successfully returns null for a key that does not exist in the hashtable', () =>{
    let ht = new HashTable(30);
    ht.add('key', 'value');

    expect(ht.get('wrong key')).toBeFalsy();
  });

  it('4. Successfully handle a collision within the hashtable', () =>{
    let table = new HashTable(20);

    table.add('tim', 'student1');
    table.add('jim', 'student2');
    table.add('tom', 'student3');
    table.add('sam', 'student4');
    table.add('jacob', 'student5');
    table.add('jimmy', 'student6');
    //tim and jimmy have the same key to cause a collision
    expect(table.map[table.hash('tim')].length).toBe(2);
  });

  it('5. Successfully retrieve a value from a bucket within the hashtable that has a collision', () =>{
    let table = new HashTable(20);

    table.add('tim', 'student1');
    table.add('jim', 'student2');
    table.add('tom', 'student3');
    table.add('sam', 'student4');
    table.add('jacob', 'student5');
    table.add('jimmy', 'student6');

    expect(table.get('tim')).toBe('student1');
    expect(table.get('jimmy')).toBe('student6');
  });

  it('6. Successfully hash a key to an in-range value', () =>{
    let ht = new HashTable(30);

    expect(ht.hash('whatever') >= 0 && ht.hash('whatever') <30).toBeTruthy();
  });

});

