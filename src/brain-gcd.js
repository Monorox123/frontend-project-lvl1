import gameWork from '../src/index.js';
import getRandomNumbers from '../src/getRandomNumbers.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
    const randNumOne = getRandomNumbers(1, 100); // a
    let workrandNumOne = randNumOne;
    const randNumTwo = getRandomNumbers(1, 100);;  // b
    let workrandNumTwo = randNumTwo;
    let result; // gcd
while (workrandNumOne != workrandNumTwo) {
  if (workrandNumOne > workrandNumTwo) {
    workrandNumOne = workrandNumOne - workrandNumTwo;
  }
  else {
    workrandNumTwo = workrandNumTwo - workrandNumOne;
  }
}
result = workrandNumOne;

    const randomQuestion = `${randNumOne} ${randNumTwo}`;
    const rightAnswer = String(result);
  return [randomQuestion, rightAnswer];
};

const brainGcd = () => gameWork(gameRule, getGameData);

export default brainGcd;