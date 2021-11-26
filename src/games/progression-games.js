import { cons } from '@hexlet/pairs';
import newGame from '../index.js';

const LENGTH_PROGRESSION = 10;
const MAX_NUMBER = 100;
const MIN_NUMBER = 0;
const MAX_STEP = 10;
const questionGame = 'What number is missing in the progression?';

const sequenceGame = () => {
  const firstNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const step = Math.floor(Math.random() * MAX_STEP);

  const arithmeticProgression = [];
  arithmeticProgression.push(firstNumber);
  for (let i = 1; i < LENGTH_PROGRESSION; i += 1) {
    arithmeticProgression.push(arithmeticProgression[i - 1] + step);
  }
  const randomElement = Math.floor(Math.random() * LENGTH_PROGRESSION);
  const hiddenProgression = [...arithmeticProgression];
  hiddenProgression[randomElement] = '..';

  const question = `Question: ${hiddenProgression.join(' ')}`;
  const answer = arithmeticProgression[randomElement];
  const questionAnswer = cons(question, String(answer));
  return questionAnswer;
};

const progressionGame = () => {
  newGame(questionGame, sequenceGame);
};

export default progressionGame;
