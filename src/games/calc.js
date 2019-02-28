import brainEngine from '..';
import getRandomNumber from '../utils';

const description = 'What is the result of the expression?';
const operations = [
  (a, b) => [`${a} + ${b}`, `${a + b}`],
  (a, b) => [`${a} - ${b}`, `${a - b}`],
  (a, b) => [`${a} * ${b}`, `${a * b}`],
];

const brainCalc = () => {
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const operatorNumber = getRandomNumber(0, operations.length);
  return operations[operatorNumber](a, b);
};

export default () => brainEngine(description, brainCalc);
