import gameWork from './index.js';
import getRandomNumbers from './getRandomNumbers.js';

const gameRule = 'What number is missing in the progression?';

const getGameData = () => {
  const progressionMaxLength = getRandomNumbers(5, 10);
  const startProgression = getRandomNumbers(1, 10);
  const progressionStep = getRandomNumbers(1, 10);
  const questionElement = getRandomNumbers(1, 4);
  let progressionNextSimbol = startProgression;
  const progressionMass = [startProgression];
  while (progressionMass.length - 1 !== progressionMaxLength) {
    progressionNextSimbol += progressionStep;
    progressionMass.push(progressionNextSimbol);
  }
  const result = progressionMass[questionElement];
  progressionMass[questionElement] = '..';
  const question = progressionMass.join(' ');

  const randomQuestion = question;
  const rightAnswer = String(result);
  return [randomQuestion, rightAnswer];
};

const brainProgression = () => gameWork(gameRule, getGameData);

export default brainProgression;
