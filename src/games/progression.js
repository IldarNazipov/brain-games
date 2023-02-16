import playGame from '../index.js';

const playBrainProgression = () => {
  const getQuestionBrainProgression = () => {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const progressionStart = Math.floor(Math.random() * 50);
    const progressionStep = Math.floor(Math.random() * 10) + 1;
    const progression = [];

    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(progressionStart + progressionStep * i);
    }

    const hiddenElementIndex = Math.floor(Math.random() * progression.length);
    progression[hiddenElementIndex] = '..';
    const result = progression.join(' ');

    return `${result}`;
  };

  const getCorrectAnswerBrainProgression = (question) => {
    const array = question.split(' ');
    const hiddenElementIndex = array.indexOf('..');
    let result;
    let progressionStep;
    if (hiddenElementIndex === array.length - 1) {
      progressionStep = array[hiddenElementIndex - 1] - array[hiddenElementIndex - 2];
      result = Number(array[hiddenElementIndex - 1]) + progressionStep;
      return `${result}`;
    }
    if (hiddenElementIndex === 0) {
      progressionStep = array[hiddenElementIndex + 2] - array[hiddenElementIndex + 1];
      result = array[hiddenElementIndex + 1] - progressionStep;
      return `${result}`;
    }
    progressionStep = (array[hiddenElementIndex + 1] - array[hiddenElementIndex - 1]) / 2;
    result = array[hiddenElementIndex + 1] - progressionStep;
    return `${result}`;
  };
  playGame('What number is missing in the progression?', getQuestionBrainProgression, getCorrectAnswerBrainProgression);
};

export default playBrainProgression;
