import readlineSync from 'readline-sync';

const playGame = (gameName, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameName);
  let winCount = 0;

  do {
    const currentQuestion = question();
    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const currentCorrectAnswer = correctAnswer(currentQuestion);
    if (userAnswer === currentCorrectAnswer) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentCorrectAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  } while (winCount < 3);

  if (winCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
