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
        message: 'Provide short description about the project',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'What are the installation steps ?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the usage details ?',
        name: 'usuage',
    },
    // {
    //     type: 'checkbox',
    //     message: 'What is your license type ?',
    //     name: 'license',
    //     choices: ['apache-2.0', 'Boost','IBM', 'MIT', 'ISC', 'Mozzilla']
    // },
    // {
    //     type: 'input',
    //     message: 'what are contribution details ?',
    //     name: 'contribution',
    // },
    // {
    //     type: 'input',
    //     message: 'FAQ section ?',
    //     name: 'questions',
    // },
    // {
    //     type: 'input',
    //     message: 'what is your GitHub username ?',
    //     name: 'username', 
    // },
    // {
    //     type: 'input',
    //     message: 'what is your email address ?',
    //     name: 'email', 
    // }

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




// console.log(data)
// const {title, discription, installation} = data
// console.log(title, discription, installation)