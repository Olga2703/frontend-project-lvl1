import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomNumber from '../random-num.js';

const LENGTH_PROGRESSION = 10;
const MAX_NUMBER = 100;
const MIN_NUMBER = 0;
const MAX_STEP = 10;
const questionGame = 'What number is missing in the progression?';

const sequenceGame = () => {
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const step = Math.floor(Math.random() * MAX_STEP);

  const arithmeticProgression = [];
  arithmeticProgression.push(firstNumber);
  for (let i = 1; i < LENGTH_PROGRESSION; i += 1) {
    arithmeticProgression.push(arithmeticProgression[i - 1] + step);
  }
  const randomElement = Math.floor(Math.random() * LENGTH_PROGRESSION);
  const hiddenProgression = [...arithmeticProgression];
  hiddenProgression[randomElement] = '..';

  const question = `${hiddenProgression.join(' ')}`;
  const answer = arithmeticProgression[randomElement];
  const questionAnswer = cons(question, String(answer));
  return questionAnswer;
};

const progressionGame = () => {
  startGame(questionGame, sequenceGame);
};

export default progressionGame;
