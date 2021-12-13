import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomNumber from '../random-num.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const sequenceGame = () => {
  const randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const answer = isEvenNumber(randomNumber);
  const questionAnswer = cons(randomNumber, answer);
  return questionAnswer;
};

const evenGame = () => {
  startGame(questionGame, sequenceGame);
};

export default evenGame;
