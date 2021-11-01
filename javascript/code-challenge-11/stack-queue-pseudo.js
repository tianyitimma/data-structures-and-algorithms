'use strict';

const {Stack} = require('../code-challenge-10/stack-and-queue');



class PseudoQueue {
  constructor() {
    this.stackInput = new Stack();
    this.stackResult = new Stack();
    // this.front = null;
    // this.back = null;
  }

  enqueue(value) {

    if(this.stackResult.peek() === 'exception') {
      this.stackResult.push(value);
      return this.stackResult;
    }
    while(this.stackResult.peek() !== 'exception') {
      let privousNode = this.stackResult.pop();
      this.stackInput.push(privousNode);
    }
    this.stackInput.push(value);
    while(this.stackInput.peek() !== 'exception'){
      let newNode = this.stackInput.pop();
      this.stackResult.push(newNode);
    }
    return this.stackResult;

  }

  dequeue() {
    if(this.stackResult.peek() === 'exception'){
      return 'exception';
    } else {
      return this.stackResult.pop();
    }

  }

}
module.exports = {
  PseudoQueue,
};

// let queue = new PseudoQueue();
// queue.enqueue(20);
// queue.enqueue(15);
// queue.enqueue(10);


// console.log(JSON.stringify(queue.enqueue(5)));

// console.log(queue.dequeue());
// console.log(JSON.stringify(queue));

// console.log(queue.dequeue());
// console.log(JSON.stringify(queue));

