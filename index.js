// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = function () {
return inquirer.prompt([
  {
    type: 'input',
    message: 'What is the title of this project?',
    name: 'title',
  },
    {
      type: 'input',
      message: 'What was your motivation for this project?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'why',
    },
    {
      type: 'input',
      message: 'What problem does it solve?',
      name: 'problem',
    },
    {
      type: 'input',
      message: 'What did you learn?',
      name: 'learn',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Provide any instructions for use.',
        name: 'instructions',
      },
      {
        type: 'input',
        message: 'Link the GitHub profiles of any collaborators, and any third-party assets that require attribution.',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'What license does your project use?',
        name: 'license',
        choices: ["MIT", "BSD 3-Clause", "BSD 2-Clause", "GPL", "Apache 2.0", "LGPL", "Mozilla Public License 2.0", "Common Dev & Dist", "Eclipse Public "]
      },
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'git',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      }
  ])
}
// TODO: Create a function to write README file --> generateMarkdown in utils folder
// TODO: Create a function to initialize app
function init() {
  questions()
    .then((response) => fs.writeFile("README.md", generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log("Task Complete")));
}


// Function call to initialize app
init();
