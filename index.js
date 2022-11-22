const fs = require('fs');
const inquirer = require('inquirer');
var http = require('http');
const {questionsEmployee, 
  questionsManager, 
  questionsEngineer, 
  questionsIntern, questionAddTeamMember} = require('./lib/prompts');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'Enter manager\'s name: ',
//       name: 'managerName',
//     },
//     {
//       type: 'input',
//       message: 'Enter manager\'s Employee ID: ',
//       name: 'managerEmployeeId',
//     },
//     {
//       type: 'input',
//       message: 'Enter manager\'s Email Address: ',
//       name: 'managerEmail',
//     },
//     {
//       type: 'input',
//       message: 'Enter manager \'s Office Number: ',
//       name: 'managerOfficeNumber',
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );

  // VARIABLES/CONSTANTS WISHLIST
  //------------------------------- 

  employees = [];


  //FUNCTION WISHLIST
  //------------------------------- 

  // function main() {}
  function main() {
    console.log('Creating a new team');
    addManager();
  }

  // function addEmployee() {}

  function addManager() {
    console.log('Enter team manager information...');

    inquirer.prompt(questionsManager).
    then((answers) => {
      console.log(answers);
    })
  }

  // function addEngineer() {}

  // function addIntern() {}

  // function generateHTML() {}

  main();
  