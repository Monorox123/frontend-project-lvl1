import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let counter = 1; counter <= 3; counter++) {
    const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    const result = randomNumber % 2;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === 0 && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
      break;
    } else if (result !== 0 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
