import gameWork from '../src/index.js';
import getRandomNumbers from '../src/getRandomNumbers.js';

const gameRule = 'What number is missing in the progression?';

const getGameData = () => {
    const progressionMaxLength = getRandomNumbers(5, 10);
    const startProgression = getRandomNumbers(1, 10);
    const progressionStep = getRandomNumbers(1, 10); 
    const questionElement = getRandomNumbers(1, 4);
    let progressionNextSimbol = startProgression;
    const progressionMass = [startProgression];
while (progressionMass.length -1 != progressionMaxLength) {
   progressionNextSimbol = progressionNextSimbol + progressionStep;
  progressionMass.push(progressionNextSimbol);
}
const result = progressionMass[questionElement];
progressionMass[questionElement] = '..';

    const randomQuestion = progressionMass
    const rightAnswer = String(result);
  return [randomQuestion, rightAnswer];
};

const brainProgression = () => gameWork(gameRule, getGameData);

export default brainProgression;