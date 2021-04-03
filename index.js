// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var util = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is your project title ?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Do you have short description about the project ?',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'Do are the installation details ?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the usage steps ?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'what are contribution details ?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'If applicable, please provide test steps?',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'What is project license type ?',
        name: 'license',
        choices: ['Boost','MIT', 'ISC', 'IBM', 'one']
    },
    {
        type: 'input',
        message: 'what is your GitHub username ?',
        name: 'username', 
    },
    {
        type: 'input',
        message: 'what is your email address ?',
        name: 'email', 
    }

]


// TODO: Create a function to initialize app
const init = () => {
inquirer.prompt(questions)
    .then((data) => {
        // const newfile = util()
        fs.writeFile('newREADME.md', util(data), (err) =>
        err ? console.error(err) : console.log ('file generated!!'))
    })
    .catch((err) => console.error(err));
}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// Function call to initialize app
init();
