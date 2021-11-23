#!/usr/bin/env node

import readlineSync from 'readline-sync';

import getUserName from '../src/cli.js';
import isEvenNumber from '../src/even-parity.js';
import getRndInteger from '../src/random-number.js';

console.log('Welcome to the Brain Games!');

const userName = getUserName();
console.log(`Hello ${userName}`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const COUNT_QUESTIONS = 3;
const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
  const randomNumber = getRndInteger(MIN_NUMBER, MAX_NUMBER);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === isEvenNumber(randomNumber)) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 
        '${isEvenNumber(randomNumber)}'`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
