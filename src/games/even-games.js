import { cons } from '@hexlet/pairs';
import isEvenNumber from '../even-parity.js';
import newGame from '../index.js';
import getRandomNumber from '../random-num.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const sequenceGame = () => {
  const randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const answer = isEvenNumber(randomNumber);
  const questionAnswer = cons(randomNumber, answer);
  return questionAnswer;
};

const evenGame = () => {
  newGame(questionGame, sequenceGame);
};

export default evenGame;
