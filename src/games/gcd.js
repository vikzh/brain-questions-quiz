import runGame from '..';
import getRandomNumber from '../utils';

const maxNumber = 100;
const minNumber = 1;
const getGcd = (x, y) => {
  if (x === 0 || y === 0) return x + y;
  if (x > y) return getGcd(x % y, y);
  return getGcd(x, y % x);
};

const task = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const x = getRandomNumber(minNumber, maxNumber);
  const y = getRandomNumber(minNumber, maxNumber);
  const question = `${x} ${y}`;
  const correctAnswer = String(getGcd(x, y));
  return [question, correctAnswer];
};

export default () => runGame(task, brainGcd);
