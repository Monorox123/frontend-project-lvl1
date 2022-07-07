import gameWork from './index.js';
import getRandomNumbers from './getRandomNumbers.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};

const getGameData = () => {
  const randNumOne = getRandomNumbers(1, 100);
  const randNumTwo = getRandomNumbers(1, 100);
  const randomQuestion = `${randNumOne} ${randNumTwo}`;
  const rightAnswer = String(findGCD(randNumOne, randNumTwo));
  return [randomQuestion, rightAnswer];
};
const brainGcd = () => gameWork(gameRule, getGameData);

export default brainGcd;
