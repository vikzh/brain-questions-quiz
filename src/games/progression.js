import brainEngine from '..';
import getRandomNumber from '../utils';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const brainProgression = () => {
  const progression = [];
  const first = getRandomNumber(1, 9);
  const step = getRandomNumber(1, 5);

  for (let i = 0; i < progressionLength; i += 1) {
    const nextSequenceItem = first + step * i;
    progression.push(nextSequenceItem);
  }

  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = `${progression[hiddenElementIndex]}`;
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => brainEngine(task, brainProgression);
