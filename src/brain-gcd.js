import gameWork from '../src/index.js';
import getRandomNumbers from '../src/getRandomNumbers.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
    const randNumOne = getRandomNumbers(1, 100); // a
    let WorkrandNumOne = randNumOne;
    const randNumTwo = getRandomNumbers(1, 100);;  // b
    let WorkrandNumTwo = randNumTwo;
    let result; // gcd
while (WorkrandNumOne != WorkrandNumTwo) {
  if (WorkrandNumOne > WorkrandNumTwo) {
    WorkrandNumOne = WorkrandNumOne - WorkrandNumTwo;
  }
  else {
    WorkrandNumTwo = WorkrandNumTwo - WorkrandNumOne;
  }
}
result = WorkrandNumOne;

    const randomQuestion = `${randNumOne} ${randNumTwo}`;
    const rightAnswer = String(result);
  return [randomQuestion, rightAnswer];
};

const brainGcd = () => gameWork(gameRule, getGameData);

export default brainGcd;