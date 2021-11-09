'use strict';

const {Stack} = require('../code-challenge-10/stack-and-queue');



class AnimalShelter {
  constructor() {
    this.stackInput = new Stack();
    this.stackResult = new Stack();
    this.front = null;
    //this.back = null;
  }

  enqueue(animal) {
    if(animal.kind === 'dog' || animal.kind === 'cat'){

      if(this.stackResult.peek() === 'exception') {
        this.stackResult.push(animal);
        this.front = animal;
        // this.back = animal;
        return;
      }
      while(this.stackResult.peek() !== 'exception') {
        let privousNode = this.stackResult.pop();
        this.stackInput.push(privousNode);
      }
      this.stackInput.push(animal);
      while(this.stackInput.peek() !== 'exception'){
        let newNode = this.stackInput.pop();
        this.stackResult.push(newNode);
        this.front = newNode;
      }
      return;
    } else {
      return console.log('Only takes dog or cat');
    }

  }

  dequeue(pref) {
    if(pref === 'dog' || pref === 'cat') {

      if(this.stackResult.peek() === 'exception'){
        return 'exception';
      }
      while(this.stackResult.peek() !== 'exception'){
        let animal = this.stackResult.pop();
        if(animal.kind === pref) {
          while(this.stackInput.peek() !== 'exception'){
            let previousAnimal = this.stackInput.pop();
            this.stackResult.push(previousAnimal);
            this.front = previousAnimal;
          }
          return animal;
        } else {
          this.stackInput.push(animal);
        }
      }

    } else {
      return null;
    }

  }

}
module.exports = {
  AnimalShelter,
};

let dog1 = {kind: 'dog', number: 1};
let cat1 = {kind: 'cat', number: 2};
let queue = new AnimalShelter();
queue.enqueue(dog1);
queue.enqueue(cat1);



console.log(JSON.stringify(queue));

console.log(queue.dequeue('cat'));
console.log(JSON.stringify(queue));


