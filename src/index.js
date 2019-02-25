import readLineSync from 'readline-sync';

const brainGame = () => {
    const userName = readLineSync.question('Hi! : pleas enter your name: ');
    return `Your name is: ${userName}`;
}

export default brainGame;