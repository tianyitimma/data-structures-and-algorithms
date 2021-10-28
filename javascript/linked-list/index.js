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
    while(current.next) {
      result.push( `${current.value} -> `);
      current = current.next;
    }
    result.push(current.value);
    return result.toString();
  }

  append(value) {
    let current = this.head;
    while(current){
      if(!current.next){
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }
    return;
  }

  insertBefore(value, newValue) {
    let current = this.head;
    if(current.value === value){
      this.insert(newValue);
      return;
    }
    while(current) {
      if(current.next.value === value){
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    return;

  }

  insertAfter(value, newValue) {
    let current = this.head;
    while(current) {
      if(current.next.value === value){
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    return;
  }

}

module.exports = {
  LinkedList,
  Node,
};
