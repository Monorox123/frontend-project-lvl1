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
      return null;
  }
  return result;
};

const getGameData = () => {
  const mathOperators = ['+', '-', '*'];
  const randNumOne = getRandomNumber(1, 10);
  const randNumTwo = getRandomNumber(1, 10);
  const randOperator = getRandomNumber(0, mathOperators.length - 1);

  const randomQuestion = `${randNumOne} ${mathOperators[randOperator]} ${randNumTwo}`;
  const rightAnswer = String(calculate(randNumOne, randNumTwo, mathOperators[randOperator]));
  return [randomQuestion, rightAnswer];
};

const startBrainCalc = () => gameWork(gameRule, getGameData);

export default startBrainCalc;
