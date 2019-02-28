import readLineSync from 'readline-sync';

const brainEngine = (task, gameData, gamesNumber = 3) => {
  const userName = readLineSync.question('Hi! : pleas enter your name: ');
  console.log(`Hello! ${userName}`);
  console.log(task);
  for (let i = 0; i < gamesNumber; i += 1) {
    let [question, rightAnswer] = gameData();
    console.log(`Question: ${question}`);
    let userAnswer = readLineSync.question('Your answer is: ');
    let request = userAnswer === rightAnswer ? 'Correct!' : 'Wrong!';
    console.log(request);
  }
};

const getRandomNumber = (minNum, maxNum) => {
    return Math.round(Math.random() * (maxNum - minNum) + minNum);
};

export { brainEngine, getRandomNumber };
