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

  insert(value) {

    let current = this.head;
    let newHead = new Node(value);
    newHead.next = current;
    return;
  }

  includes(value) {
    let current = this.head;
    while(current) {
      if (current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let result = [];
    while(current) {
      result.push(`{ ${current.value} } -> `);
      current = current.next;
    }
    result.push(current.value);
    return result;
  }
}

module.exports = LinkedList;
