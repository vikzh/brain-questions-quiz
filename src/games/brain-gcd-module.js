import runGame from '..';
import { getRandomNumber, getGcd } from '../utils';

const maxNumber = 100;
const minNumber = 1;

const task = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const x = getRandomNumber(minNumber, maxNumber);
  const y = getRandomNumber(minNumber, maxNumber);
  const question = `${x} ${y}`;
  const correctAnswer = String(getGcd(x, y));
  return [question, correctAnswer];
};

export default () => runGame(task, brainGcd);
