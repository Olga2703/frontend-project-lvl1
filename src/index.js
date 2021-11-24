import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

import getUserName from './cli.js';

const COUNT_QUESTIONS = 3;

const newGame = (questionGame, sequenceGame) => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();
  console.log(`Hello ${userName}`);

  console.log(`${questionGame}`);

  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const questionAnswer = sequenceGame();
    console.log(`Question: ${car(questionAnswer)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === cdr(questionAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 
            '${cdr(questionAnswer)}'. Let's try again, ${userName}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default newGame;
