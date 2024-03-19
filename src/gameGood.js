import readlineSync from 'readline-sync';
import greering from './cli.js';

const gameGood = (description, taskFunc) => {
  const playerName = greering();
  console.log(description);

  let mark = 0;
  for (let i = 1; i <= 3; i += 1) {
    const Mark1 = taskFunc();

    console.log(`Question: ${Mark1[0]}`);
    const answer = readlineSync.question('Answer: ');

    if (answer === Mark1[1]) {
      console.log('Correct!');
      mark += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${Mark1[1]}.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }

  if (mark === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default gameGood;
