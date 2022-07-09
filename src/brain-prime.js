import gameWork from './index.js';
import getRandomNumbers from './getRandomNumbers.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const randomNumber = getRandomNumbers(2, 20);
  const gameQuestion = randomNumber.toString();
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};
const startBrainPrime = () => gameWork(gameRule, getGameData);
export default startBrainPrime;
