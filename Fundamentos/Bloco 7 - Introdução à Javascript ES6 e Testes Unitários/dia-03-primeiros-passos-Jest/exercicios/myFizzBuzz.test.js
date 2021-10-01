const myFizzBuzz = require('./myFizzBuzz');

describe('function myFizzBuzz', () => {
  it ('receber valor 15 e retornar "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  })
  it ('receber valor 9 e retornar "fizz"', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  })
  it ('receber valor 25 e retornar "buzz"', () => {
    expect(myFizzBuzz(25)).toMatch('buzz');
  })
  it ('receber valor 13 e retornar 13', () => {
    expect(myFizzBuzz(13)).toEqual(13);
  })
  it ('receber valor que não é um número e retornar false', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  })
});