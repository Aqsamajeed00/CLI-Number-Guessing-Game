#! /usr/bin/env node
import inquirer from "inquirer"
//  1) Computer will generate a randon number
//  2) user input for guessing number
//  3) compare user input with computer generated number and show result - done

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessing Game")

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);

if(answers.userGuessedNumber === randomNumber){
console.log("congratulations! you guessed right number.")
}else {
  console.log("you guessed wrong number ");
}