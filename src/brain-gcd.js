import gameWork from './index.js';
import getRandomNumbers from './getRandomNumbers.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const randNumOne = getRandomNumbers(1, 100);
  let workrandNumOne = randNumOne;
  const randNumTwo = getRandomNumbers(1, 100);
  let workrandNumTwo = randNumTwo;
  let result = 0;
  while (workrandNumOne !== workrandNumTwo) {
    if (workrandNumOne > workrandNumTwo) {
      workrandNumOne -= workrandNumTwo;
    } else {
      workrandNumTwo -= workrandNumOne;
    }
  }
  result = workrandNumOne;

  const randomQuestion = `${randNumOne} ${randNumTwo}`;
  const rightAnswer = String(result);
  return [randomQuestion, rightAnswer];
};

const brainGcd = () => gameWork(gameRule, getGameData);

export default brainGcd;
