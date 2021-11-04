'use strict';

const { Stack , Queue } = require('../code-challenge-10/stack-and-queue');


describe('1. Can successfully push onto a stack', () => {
  it('Should perform push function', () => {
    let stack = new Stack();
    stack.push(3);
    expect(stack.isEmpty).toBeTruthy();
  });

});

describe('2. Can successfully push multiple values onto a stack', () => {
  it('Should be able push multiple values', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(4);
    expect(JSON.stringify(stack)).toBe('{"top":{"value":4,"next":{"value":3,"next":null}}}');
  });
});

describe('3. Can successfully pop off the stack', () => {
  it('Should pop off the last value and remove it from the stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toBe(4);
    expect(JSON.stringify(stack)).toBe('{"top":{"value":3,"next":null}}');
  });
});

describe('4. Can successfully empty a stack after multiple pops', () => {
  it('Should return an empty stack after pop twice', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(4);
    stack.pop();
    stack.pop();
    expect(JSON.stringify(stack)).toBe('{"top":null}');
  });
});

describe('5. Can successfully peek the next item on the stack', () => {
  it('Should return 4 and not change the stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(4);
    expect(stack.peek()).toBe(4);
    expect(JSON.stringify(stack)).toBe('{"top":{"value":4,"next":{"value":3,"next":null}}}');
  });
});

describe('6. Can successfully instantiate an empty stack', () => {
  it('Should return true for an empty stack and false for a not empty stack', () => {
    let stack = new Stack();
    stack.push(3);
    expect(stack.isEmpty()).toBeFalsy();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });
});

describe('7. Calling pop or peek on empty stack raises exception', () => {
  it('Should return exception', () => {
    let stack = new Stack();
    expect(stack.peek()).toBeFalsy();
    expect(stack.pop()).toBeFalsy();
  });
});

describe('8. Can successfully enqueue into a queue', () => {
  it('Should return a truthy value when enqueue', () => {
    let queue = new Queue();
    queue.enqueue(5);

    expect(queue).toBeTruthy();
  });
});

describe('9. Can successfully enqueue multiple values into a queue', () => {
  it('Should show two nodes in queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);

    expect(JSON.stringify(queue)).toBe('{"front":{"value":5,"next":{"value":6,"next":null}},"back":{"value":6,"next":null}}');
  });
});

describe('10. Can successfully dequeue out of a queue the expected value', () => {
  it('Should return the first enqueue value and remove it from the queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);

    expect(queue.dequeue()).toBe(5);
    expect(JSON.stringify(queue)).toBe('{"front":{"value":6,"next":null},"back":{"value":6,"next":null}}');
  });
});

describe('11. Can successfully peek into a queue, seeing the expected value', () => {
  it('Should show the front value and not change the queue', () => {
    let queue = new Queue();
    queue.enqueue(5);

    expect(queue.peek()).toBe(5);
    expect(JSON.stringify(queue)).toBe('{"front":{"value":5,"next":null},"back":{"value":5,"next":null}}');
  });
});

describe('12. Can successfully empty a queue after multiple dequeues', () => {
  it('Should be an empty queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);
    queue.dequeue();
    queue.dequeue();

    expect(JSON.stringify(queue)).toBe('{"front":null,"back":null}');
  });
});

describe('13. Can successfully instantiate an empty queue', () => {
  it('Should tell if the queue is empty or not', () => {
    let queue = new Queue();
    queue.enqueue(5);
    expect(queue.isEmpty()).toBeFalsy();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });
});

describe('14. Calling dequeue or peek on empty queue raises exception', () => {
  it('Should return exceptions', () => {
    let queue = new Queue();

    expect(queue.dequeue()).toBeFalsy();
    expect(queue.peek()).toBeFalsy();
  });
});




