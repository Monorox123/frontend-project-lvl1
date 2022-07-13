import gameWork from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const getGameData = () => {
  const progressionMaxLength = getRandomNumber(5, 10);
  const startProgression = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const questionElement = getRandomNumber(1, 4);
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

const startBrainProgression = () => gameWork(gameRule, getGameData);

export default startBrainProgression;
