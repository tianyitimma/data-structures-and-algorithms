'use strict';

const { PseudoQueue } = require('../code-challenge-11/stack-queue-pseudo');


describe('1. perform enqueue function without any input', () => {
  it('Should return the arg value', () => {
    let queue = new PseudoQueue();
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(5);
  });

});

describe('2. perform enqueue function with input of [10]->[15]->[20]', () => {
  it('Should return 20, 15, 10, 5', () => {
    let queue = new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(15);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(5);
  });

});

describe('3. perform dequeue function with input of [5]->[10]->[15]->[20]', () => {
  it('Should return 20', () => {
    let queue = new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(20);
  });

});

describe('4. perform dequeue function with input of [5]->[10]->[15]', () => {
  it('Should return 15', () => {
    let queue = new PseudoQueue();
    queue.enqueue(15);
    queue.enqueue(10);
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(15);
  });

});

