#!/usr/bin/env node
import gameGood from '../src/gameGood.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = () => {
  const num = Math.round(Math.random() * 50);

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }
  return [num, 'yes'];
};

gameGood(description, task);
