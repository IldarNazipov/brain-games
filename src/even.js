import readlineSync from 'readline-sync';

const playBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'');
  let winCount = 0;

  do {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer = '';
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      winCount = 0;
    }
  } while (winCount < 3);

  console.log(`Congratulations, ${userName}!`);
};

export default playBrainEven;
