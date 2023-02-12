import playGame from './index.js';

const playBrainCalc = () => {
  const getQuestionBrainCalc = () => {
    const randomLeftNumber = Math.floor(Math.random() * 100);
    const randomRightNumber = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    return `${randomLeftNumber} ${randomOperator} ${randomRightNumber}`;
  };

  const getCorrectAnswerBrainCalc = (question) => {
    const [left, operator, right] = question.split(' ');
    switch (operator) {
      case '+':
        return String(Number(left) + Number(right));
      case '-':
        return String(Number(left) - Number(right));
      case '*':
        return String(Number(left) * Number(right));
      default:
        return '';
    }
  };

  playGame('What is the result of the expression?', getQuestionBrainCalc, getCorrectAnswerBrainCalc);
};

export default playBrainCalc;
