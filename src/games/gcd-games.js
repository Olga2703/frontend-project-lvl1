import { cons } from '@hexlet/pairs';
import newGame from '../index.js';
import getGcd from '../gcd-func.js';
import getRandomNumber from '../random-num.js';

const questionGame = 'Find the greatest common divisor of given numbers.';

const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

const sequenceGame = () => {
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  const questionAnswer = cons(question, String(answer));
  return questionAnswer;
};

const gcdGame = () => {
  newGame(questionGame, sequenceGame);
};

export default gcdGame;
