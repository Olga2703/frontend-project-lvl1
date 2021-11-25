import { cons } from '@hexlet/pairs';
import newGame from '../index.js';
import getGcd from '../gcd-func.js';

const questionGame = 'Find the greatest common divisor of given numbers.';

const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

const sequenceGame = () => {
  const firstNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const secondNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  const questionAnswer = cons(question, String(answer));
  return questionAnswer;
};

const gcdGame = () => {
  newGame(questionGame, sequenceGame);
};

export default gcdGame;
