import gameWork from './index.js';
import getRandomNumbers from './getRandomNumbers.js';

const gameRule = 'What is the result of the expression?';

const mathOperations = (num1, num2, operators) => {
  let result = '';
  switch (operators) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return result;
};

const getGameData = () => {
  const mathOperators = ['+', '-', '*'];
  const randNumOne = getRandomNumbers(1, 10);
  const randNumTwo = getRandomNumbers(1, 10);
  const randOperator = getRandomNumbers(0, mathOperators.length - 1);

  const randomQuestion = `${randNumOne} ${mathOperators[randOperator]} ${randNumTwo}`;
  const rightAnswer = String(mathOperations(randNumOne, randNumTwo, mathOperators[randOperator]));
  return [randomQuestion, rightAnswer];
};

const startBrainCalc = () => gameWork(gameRule, getGameData);

export default startBrainCalc;
