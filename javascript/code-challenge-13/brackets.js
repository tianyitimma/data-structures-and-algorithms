'use strict';

const {Stack} = require('../code-challenge-10/stack-and-queue');


function brackets(str) {
  let allBrackets = new Stack();
  // let squareBrackets = new Stack();
  // let curlyBrackets = new Stack();


  let inputArr = str.split('');
  let i = 0;
  while(inputArr[i]) {
    if(inputArr[i] === '('){
      allBrackets.push(inputArr[i]);
    } else if(inputArr[i] === '[') {
      allBrackets.push(inputArr[i]);
    } else if(inputArr[i] === '{'){
      allBrackets.push(inputArr[i]);
    } else if(inputArr[i] === ')' ) {
      if(allBrackets.peek() === '(') {
        allBrackets.pop();
      } else {
        return false;
      }
    } else if(inputArr[i] === ']' ) {
      if(allBrackets.peek() === '[') {
        allBrackets.pop();
      } else {
        return false;
      }
    } else if(inputArr[i] === '}' ) {
      if(allBrackets.peek() === '{') {
        allBrackets.pop();
      } else {
        return false;
      }
    }
    i++;
  }
  return allBrackets.isEmpty();
}

module.exports = brackets;

// console.log(brackets('{}'));
// console.log(brackets('{}(){}'));
// console.log(brackets('()[[Extra Characters]]'));
// console.log(brackets('(){}[[]]'));
// console.log(brackets('{}{Code}[Fellows](())'));
// console.log(brackets('[({}]'));
// console.log(brackets('(]('));
// console.log(brackets('{(})'));

// console.log('==================');
// console.log(brackets(')()()('));
// console.log(brackets('}]'));
// console.log(brackets(']('));
