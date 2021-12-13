import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomNumber from '../random-num.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

const isPrime = (num) => {
  let i = 2;
  let j = 0;
  while (i * i <= num && j !== 1) {
    if (num % i === 0) {
      j = 1;
    } else {
      i += 1;
    }
  }
  return j === 1 || num === 0 ? 'no' : 'yes';
};

const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const sequenceGame = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${number}`;
  const answer = isPrime(number);
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

const primeGame = () => {
  startGame(questionGame, sequenceGame);
};

export default primeGame;
