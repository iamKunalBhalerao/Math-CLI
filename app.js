#!/usr/bin/env node

import { Command } from "commander";
import prompts from "prompts";
import figlet from "figlet";
import {
  cristal,
  instagram,
  mind,
  morning,
  passion,
  pastel,
  retro,
  summer,
} from "gradient-string";
import chalk from "chalk";

const program = new Command();

// Chalk Colors
const blue = chalk.blue;
const blueBright = chalk.blueBright;
const redBright = chalk.redBright;
const yellowBright = chalk.yellowBright;

async function doStuff() {
  const text = await figlet.text("MATH-CLI");
  console.log(instagram(text));
  console.log(pastel("\nWelcome to the Math Calculator!\n"));
}

async function start() {
  await doStuff();

  const questions = [
    {
      type: "number",
      name: "num1",
      message: `${mind("Enter the first number:")}`,
      validate: (v) =>
        isNaN(v) ? redBright("Please enter a valid number") : true,
    },
    {
      type: "number",
      name: "num2",
      message: `${mind("Enter the second number:")}`,
      validate: (v) =>
        isNaN(v) ? redBright("Please enter a valid number") : true,
    },
    {
      oncancel: () => {
        console.log(redBright("\nOperation cancelled by the user."));
        process.exit(1);
      },
    },
  ];

  const { num1, num2 } = await prompts(questions);

  program
    .name("mathcli")
    .description("A simple CLI tool For Basic Math Calculations")
    .version("1.0.0");

  // ADD
  program
    .command("add")
    .description("Add two numbers")
    .action(async () => {
      console.log(
        `\nAddition of ${yellowBright(num1)} and ${yellowBright(
          num2
        )} is = ${blueBright(num1 + num2)}`
      );
    });

  // SUBTRACT
  program
    .command("sub")
    .description("Subtract two numbers")
    .action(async () => {
      console.log(
        `\nSubtraction of ${yellowBright(num1)} and ${yellowBright(
          num2
        )} is = ${blueBright(num1 - num2)}`
      );
    });

  // MULTIPLY
  program
    .command("mul")
    .description("Multiply two numbers")
    .action(async () => {
      console.log(
        `\nMultiplication of ${yellowBright(num1)} and ${yellowBright(
          num2
        )} is = ${blueBright(num1 * num2)}`
      );
    });

  // DIVIDE
  program
    .command("div")
    .description("Divide two numbers")
    .action(async () => {
      if (num2 === 0) {
        console.log(redBright("Error: Division by zero is not allowed."));
        return;
      }
      console.log(
        `\nDivision of ${yellowBright(num1)} and ${yellowBright(
          num2
        )} is = ${blueBright(num1 / num2)}`
      );
    });

  // CHOICE
  program
    .command("choice")
    .description("Choice Operation")
    .action(async () => {
      const { operation } = await prompts(
        {
          type: "select",
          name: "operation",
          message: `${cristal("Choose an operation:")}`,
          choices: [
            { title: `${morning("Add")}`, value: "add" },
            { title: `${cristal("Subtract")}`, value: "subtract" },
            { title: `${summer("Multiply")}`, value: "multiply" },
            { title: `${retro("Divide")}`, value: "divide" },
          ],
        },
        {
          onCancel: () => {
            console.log(passion("\nOperation cancelled."));
            process.exit(1);
          },
        }
      );

      // Perform operation
      let result;

      switch (operation) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          if (num2 === 0) {
            console.log(redBright("Error: Division by zero is not allowed."));
            process.exit(1);
          }
          result = num1 / num2;
          break;
        default:
          console.log(redBright("Unknown operation selected."));
          process.exit(1);
      }

      console.log(
        `\n \n ${operation}ion of ${morning(num1)} and ${morning(
          num2
        )} is : ${cristal(result)}`
      );
    });

  program.parse(process.argv);
}
start();
