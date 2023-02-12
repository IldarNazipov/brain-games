import playGame from '../index.js';

const playBrainPrime = () => {
  const getQuestionBrainPrime = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return `${randomNumber}`;
  };

  const getCorrectAnswerBrainPrime = (question) => {
    if (question <= 1) {
      return 'no';
    }
    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', getQuestionBrainPrime, getCorrectAnswerBrainPrime);
};

export default playBrainPrime;
