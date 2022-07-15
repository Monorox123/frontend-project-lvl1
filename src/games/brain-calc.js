/* eslint-disable max-len */
import gameWork from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What is the result of the expression?';

const calculate = (num1, num2, operators) => {
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
      throw new Error(`Unknown operator: ${operators}`);
  }
  return result;
};

const getGameData = () => {
  const mathOperators = ['+', '-', '*'];
  const randomeNumberOne = getRandomNumber(1, 10);
  const randomeNumberTwo = getRandomNumber(1, 10);
  const randomeOperator = getRandomNumber(0, mathOperators.length - 1);

  const randomQuestion = `${randomeNumberOne} ${mathOperators[randomeOperator]} ${randomeNumberTwo}`;
  const rightAnswer = String(calculate(randomeNumberOne, randomeNumberTwo, mathOperators[randomeOperator]));
  return [randomQuestion, rightAnswer];
};

const startBrainCalc = () => gameWork(gameRule, getGameData);

export default startBrainCalc;
