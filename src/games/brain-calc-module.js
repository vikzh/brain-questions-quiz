import { brainEngine, getRandomNumber } from '..';

const description = 'What is the result of the expression?';

const braimCalc = () => {
  const first = getRandomNumber(0, 100);
  const second = getRandomNumber(0, 100);
  const operatorNumber = getRandomNumber(0, 2);

  let question;
  let answer;
  switch (operatorNumber) {
    case 0:
      question = `${first} + ${second}`;
      answer = `${first + second}`;
      return [question, answer];
    case 1:
      question = `${first} - ${second}`;
      answer = `${first - second}`;
      return [question, answer];
    case 2:
      question = `${first} * ${second}`;
      answer = `${first * second}`;
      return [question, answer];
    default:
      return null;
  }
};

export default () => brainEngine(description, braimCalc);
