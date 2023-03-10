// ! Node Modules that are require
// ! the fs is a module that stands for File System we have this to read from and write files from your computer
const fs = require("fs");
// ! inquirer is a dependency that needs to be installed for this program to work on its basic level.
const inquirer = require("inquirer");

const teamArray = [];

// ! array that will start with the team manager.
const createManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team member's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team member's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team member's email address?",
    },
    {
      type: "list",
      name: "role",
      message: "What is the team member's role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
};
