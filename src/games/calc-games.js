import { cons } from '@hexlet/pairs';
import newGame from '../index.js';
import calculate from '../calc-exp.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 0;
const OPERATIONS = ['+', '-', '*'];

const questionGame = 'What is the result of the expression?';
const sequenceGame = () => {
  const firstNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const secondNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
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
