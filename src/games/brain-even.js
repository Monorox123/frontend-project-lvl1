import gameWork from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getGameData = () => {
  const randomNumber = getRandomNumber(0, 20);
  const gameQuestion = randomNumber.toString();
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

const startBrainEven = () => gameWork(gameRule, getGameData);

export default startBrainEven;
