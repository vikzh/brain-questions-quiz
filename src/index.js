import readLineSync from 'readline-sync';

const roundsNumber = 3;

const brainEngine = (task, gameData) => {
  console.log(task);
  const userName = readLineSync.question('Hi! : pleas enter your name: ');
  console.log(`Hello! ${userName}`);
  for (let i = roundsNumber; i > 0; i -= 1) {
    const [question, rightAnswer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer is: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is a wrong answer.`);
      console.log(`Correct Answer was ${rightAnswer}\nLet's try again, ${userName}`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}`);
  return true;
};

export default brainEngine;
