import playGame from './index.js';

const playBrainEven = () => {
  const getQuestionBrainEven = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return `${randomNumber}`;
  };

  const getCorrectAnswerBrainEven = (question) => ((question % 2 === 0) ? 'yes' : 'no');

  playGame('Answer "yes" if the number is even, otherwise answer "no".', getQuestionBrainEven, getCorrectAnswerBrainEven);
};

export default playBrainEven;
