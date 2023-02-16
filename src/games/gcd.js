import playGame from '../index.js';

const playBrainGcd = () => {
  const getQuestionBrainGcd = () => {
    const randomleftNumber = Math.floor(Math.random() * 100) + 1;
    const randomRightNumber = Math.floor(Math.random() * 100) + 1;
    return `${randomleftNumber} ${randomRightNumber}`;
  };

  const getCorrectAnswerBrainGcd = (question) => {
    const [left, right] = question.split(' ');
    let divisor;
    if (Number(left) >= Number(right)) {
      divisor = Number(right);
    } else {
      divisor = Number(left);
    }
    while (Number(left) % divisor !== 0 || Number(right) % divisor !== 0) {
      divisor -= 1;
    }
    return divisor.toString();
  };

  playGame('Find the greatest common divisor of given numbers.', getQuestionBrainGcd, getCorrectAnswerBrainGcd);
};

export default playBrainGcd;
