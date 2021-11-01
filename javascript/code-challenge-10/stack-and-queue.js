'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let oldTop = this.top;
    let newTop = new Node(value);
    newTop.next = oldTop;
    this.top = newTop;
  }

  pop() {
    if(this.top){
      let oldTop = this.top;
      this.top = oldTop.next;
      return oldTop.value;
    } else {
      return 'exception';
    }
  }

  peek() {
    if(this.top){
      return this.top.value;
    } else {
      return 'exception';
    }
  }

  isEmpty() {
    if(this.top) {
      return false;
    } else {
      return true;
    }
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    let currentBack = this.back;
    if(currentBack){
      currentBack.next = newNode;
    }
    this.back = newNode;
    if(!this.front) {
      this.front = newNode;
    }
  }

  dequeue() {
    let oldFront = this.front;
    if(this.back === oldFront) {
      this.back = null;
    }
    if(this.front) {
      this.front = oldFront.next;
      return oldFront.value;
    } else {
      return 'exception';
    }
  }

  peek() {
    if(this.front) {
      return this.front.value;
    } else {
      return 'exception';
    }
  }

  isEmpty() {
    if(this.front) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = {
  Stack,
  Queue,
};

// let stack = new Stack();
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);

// console.log(JSON.stringify(stack));
// stack.pop();
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(JSON.stringify(stack));

// stack.peek();

// console.log(JSON.stringify(stack));

// console.log(stack.isEmpty());

// let queue = new Queue();
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
//queue.enqueue(6);

// console.log(JSON.stringify(queue));

// console.log(queue.dequeue());
// console.log(JSON.stringify(queue));

// console.log(queue.peek());

// console.log(JSON.stringify(queue));

// console.log(queue.isEmpty());
