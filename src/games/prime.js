import brainEngine from '..';
import getRandomNumber from '../utils';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  const iter = (counter) => {
    if (counter > n / 2) {
      return true;
    }
    if (n % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};

const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const brainPrime = () => {
  const num = getRandomNumber(-1, 100);
  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => brainEngine(startMessage, brainPrime);
