import { cons } from '@hexlet/pairs';
import newGame from '../index.js';
import isPrime from '../isPrime.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const sequenceGame = () => {
  const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const question = `${number}`;
  const answer = isPrime(number);
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

const primeGame = () => {
  newGame(questionGame, sequenceGame);
};

export default primeGame;
