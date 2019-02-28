import readLineSync from 'readline-sync';

const brainEngine = (task, gameData, gamesNumber = 3) => {
  const userName = readLineSync.question('Hi! : pleas enter your name: ');
  console.log(`Hello! ${userName}`);
  console.log(task);
  for (let i = 0; i < gamesNumber; i += 1) {
    const [question, rightAnswer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer is: ');
    const request = userAnswer === rightAnswer ? 'Correct!' : 'Wrong!';
    console.log(request);
  }
};

const getRandomNumber = (minNum, maxNum) => Math.round(Math.random() * (maxNum - minNum) + minNum);

export { brainEngine, getRandomNumber };
