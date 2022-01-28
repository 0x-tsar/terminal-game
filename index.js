#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Who wants to be a millionaire? \n "
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
      ${chalk.bgRed.bold("HOW TO PLAY")}
    - ${chalk.bold.cyan("Do whatever!")}
  `);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "Player name",
    type: "input",
    message: "What is your name? ",
    default() {
      return "Player";
    },
  });

  playerName = answers.playerName;
}

await welcome();
await askName();
