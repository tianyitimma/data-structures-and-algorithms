'use strict';

const brackets = require('../code-challenge-13/brackets');


describe('1. inputing pair brackets', () => {
  it('Should return true for (), [], {}, and ()[]{},', () => {
    expect(brackets('()')).toBeTruthy();
    expect(brackets('[]')).toBeTruthy();
    expect(brackets('{}')).toBeTruthy();
    expect(brackets('()[]{}')).toBeTruthy();
  });

});

describe('2. inputing pair brackets with strings inside', () => {
  it('Should return true for ()[[Extra Characters]], {}{Code}[Fellows](()), (){}[[]], and ()[]{},', () => {
    expect(brackets('()[[Extra Characters]]')).toBeTruthy();
    expect(brackets('{}{Code}[Fellows](())')).toBeTruthy();
    expect(brackets('(){}[[]]')).toBeTruthy();
  });

});

describe('3. inputing unpaired brackets ', () => {
  it('Should return false for [({}], (](, and {(})', () => {
    expect(brackets('[({}]')).toBeFalsy();
    expect(brackets('(](')).toBeFalsy();
    expect(brackets('{(})')).toBeFalsy();
  });

});

describe('4. inputing end brackets first ', () => {
  it('Should return false for }] and ](', () => {
    expect(brackets('}]')).toBeFalsy();
    expect(brackets('](')).toBeFalsy();
  });

});
