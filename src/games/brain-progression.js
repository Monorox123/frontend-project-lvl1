import gameWork from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const getGameData = () => {
  const numbersMaxLength = getRandomNumber(5, 10);
  const startNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const questionElement = getRandomNumber(1, 4);
  let nextNumber = startNumber;
  const numbers = [startNumber];
  while (numbers.length - 1 !== numbersMaxLength) {
    nextNumber += step;
    numbers.push(nextNumber);
  }
  const result = numbers[questionElement];
  numbers[questionElement] = '..';
  const question = numbers.join(' ');

  const randomQuestion = question;
  const rightAnswer = String(result);
  return [randomQuestion, rightAnswer];
};

const startBrainProgression = () => gameWork(gameRule, getGameData);

export default startBrainProgression;
