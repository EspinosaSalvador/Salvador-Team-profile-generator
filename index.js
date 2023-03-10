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
      message: "Provide us with the team manager's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          alert.console.log("Please enter the managers name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Provide us with the team manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "Provide us withv the team manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Provde us with an office number for the Manager",
    },
  ]);
};

// ! we need to call the function of createManager to be able to see it in node index.js if we do not do this nothing will start.
createManager();
