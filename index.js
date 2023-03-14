// ! Node Modules that are require
// ! the fs is a module that stands for File System we have this to read from and write files from your computer
const fs = require("fs");
// ! inquirer is a dependency that needs to be installed for this program to work on its basic level.
const inquirer = require("inquirer");
const libEmployee = require("./lib/Employee");
const libManager = require("./lib/Manager");
const libIntern = require("./lib/Intern");
const libEngineer = require("./lib/Engineer");
const generatehtml = require("./src/generatehtml");

const teamArray = [];

// ! array that will start with the team manager.
const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Provide us with the team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            // ! had to do console.log due that alert.console.log was not working as intended and it didn't provide me with a message.
            console.log("Please enter the team Managers name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Provide us with the team Manager's ID?",
        // ! modify validations to require number and to not skip the question in node
        validate: (nameInput) => {
          if (nameInput.trim() !== "" && !isNaN(nameInput)) {
            return true;
          } else {
            console.log(
              "Please enter a valid number for the team Managers ID!"
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Provide us withv the team Manager's email address?",
        // ! added a validation requirement that is looking for @ and . all without spaces.
        // ! if the user does not input these it will not work and will prompt with a legend stating to add the email.
        validate: (emailInput) => {
          const emailPattern = /\S+@\S+\.\S+/;
          if (emailInput && emailPattern.test(emailInput)) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Provide us with an office number for the Manager",
        // ! modify validations to require number
        validate: (nameInput) => {
          if (nameInput.trim() !== "" && !isNaN(nameInput)) {
            return true;
          } else {
            console.log("Please enter a valid number for the office number!");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new libManager(name, id, email, officeNumber);
      teamArray.push(manager);
      console.log(manager);
      addEmployee();
    });
};

const createEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Provide us with the team Engineer's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            // ! had to do console.log due that alert.console.log was not working as intended and it didn't provide me with a message.
            console.log("Please enter the team Engineers name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Provide us with the team Engineer's ID?",
        // ! modify validations to require number and to not skip the question in node
        validate: (nameInput) => {
          if (nameInput.trim() !== "" && !isNaN(nameInput)) {
            return true;
          } else {
            console.log(
              "Please enter a valid number for the team Engineer ID!"
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Provide us withv the team Engineer's email address?",
        // ! added a validation requirement that is looking for @ and . all without spaces.
        // ! if the user does not input these it will not work and will prompt with a legend stating to add the email.
        validate: (emailInput) => {
          const emailPattern = /\S+@\S+\.\S+/;
          if (emailInput && emailPattern.test(emailInput)) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Github",
        message: "Provide us with a Github username",
        // ! modify validations to require number
        validate: (nameInput) => {
          if (nameInput.trim() !== "" && !isNaN(nameInput)) {
            return true;
          } else {
            console.log("Please enter a valid Github username!");
            return false;
          }
        },
      },
    ])
    .then((engineerInput) => {
      const { name, id, email, Github } = engineerInput;
      const engineer = new libEngineer(name, id, email, Github);
      teamArray.push(engineer);
      console.log(engineer);
      addEmployee();
    });
};

const createIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Provide us with the team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            // ! had to do console.log due that alert.console.log was not working as intended and it didn't provide me with a message.
            console.log("Please enter the team Managers name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Provide us with the team Manager's ID?",
        // ! modify validations to require number and to not skip the question in node
        validate: (nameInput) => {
          if (nameInput.trim() !== "" && !isNaN(nameInput)) {
            return true;
          } else {
            console.log(
              "Please enter a valid number for the team Managers ID!"
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Provide us withv the team Manager's email address?",
        // ! added a validation requirement that is looking for @ and . all without spaces.
        // ! if the user does not input these it will not work and will prompt with a legend stating to add the email.
        validate: (emailInput) => {
          const emailPattern = /\S+@\S+\.\S+/;
          if (emailInput && emailPattern.test(emailInput)) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "School",
        message: "Provide us with the school for the intern",
        // ! modify validations to require number
        validate: (nameInput) => {
          if (nameInput.trim() !== "" && !isNaN(nameInput)) {
            return true;
          } else {
            console.log("Please enter a valid school!");
            return false;
          }
        },
      },
    ])
    .then((internInput) => {
      const { name, id, email, School } = internInput;
      const intern = new libIntern(name, id, email, School);
      teamArray.push(intern);
      console.log(intern);
      addEmployee();
    });
};

// ! we need to call the function of createManager to be able to see it in node index.js if we do not do this nothing will start.
createManager();

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Do you want to add another team memeber?",
        choices: ["Manager", "Engineer", "Intern", "None"],
      },
    ])
    .then((data) => {
      if (data.addEmployee === "Manager") {
        createManager();
      } else if (data.addEmployee === "Engineer") {
        createEngineer();
      } else if (data.addEmployee === "Intern") {
        createIntern();
      } else {
        // ! add generate html function here.
        fs.writeFileSync("./public/team.html", generatehtml(teamArray));
      }
    });
}
// ! fs
