import gameWork from './index.js';
import getRandomNumbers from './getRandomNumbers.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
  const someNumber = getRandomNumbers(1, 20);
  let flag = true;
  for (let i = 2; i < someNumber; i + 1) {
    if (someNumber % i === 0) {
      flag = false;
      break;
    }
  }
  let result = 0;
  if (flag === true) {
    result = 'yes';
  } else if (flag === false) {
    result = 'no';
  }
  const randomQuestion = someNumber;
  const rightAnswer = result;
  return [randomQuestion, rightAnswer];
};
const brainPrime = () => gameWork(gameRule, getGameData);
export default brainPrime;
