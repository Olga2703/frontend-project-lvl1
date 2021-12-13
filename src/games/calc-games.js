import { cons } from '@hexlet/pairs';
import newGame from '../index.js';
import getRandomNumber from '../random-num.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 0;
const OPERATIONS = ['+', '-', '*'];

const calculate = (firstNum, secondNum, operation) => {
  if (operation === '+') {
    return firstNum + secondNum;
  }
  if (operation === '-') {
    return firstNum - secondNum;
  }
  return firstNum * secondNum;
};

const questionGame = 'What is the result of the expression?';
const sequenceGame = () => {
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const randomNum = Math.floor(Math.random() * OPERATIONS.length);
  const question = `${firstNumber} ${OPERATIONS[randomNum]} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, OPERATIONS[randomNum]);
  const questionAnswer = cons(question, String(answer));
  return questionAnswer;
};

const calcGame = () => {
  newGame(questionGame, sequenceGame);
};

export default calcGame;
