#!/usr/bin/env node
import gameGood from '../src/gameGood.js';

const description = 'What is the result of the expression?';

const task = () => {
  const operand1 = Math.round(Math.random() * 10);
  const operand2 = Math.round(Math.random() * 10);

  const operator = ['+', '*', '-'];
  const indexOper = Math.floor(Math.random() * 2);

  let answer = 0;

  switch (indexOper) {
    case 0:
      answer = `${operand1 + operand2}`;
      break;
    case 1:
      answer = `${operand1 * operand2}`;
      break;
    default:
      answer = `${operand1 - operand2}`;
  }
  return [`${operand1} ${operator[indexOper]} ${operand2}`, answer];
};

gameGood(description, task);
