'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k) {
    let values = [];
    let current = this.head;
    while(current) {
      let value = current.value;
      values.push(value);
      current = current.next;
    }
    if(k<values.length){
      return values[values.length-k-1];
    } else {
      return console.log('Exception');
    }
  }

}

module.exports = LinkedList;
