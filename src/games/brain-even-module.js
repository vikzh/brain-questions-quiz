import brainEngine from '..';
import { getRandomNumber } from '../utils';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';
const maxNumber = 100;
const minNumber = 0;

const isEven = number => (number % 2) === 0;

const brainEvenData = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => brainEngine(gameTask, brainEvenData);
