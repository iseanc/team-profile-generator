// required Node.JS modules
const fs = require('fs');
const inquirer = require('inquirer');
var http = require('http');

// required user-defined modules
const {questionsEmployee, 
  questionsManager, 
  questionsEngineer, 
  questionsIntern, questionAddTeamMember} = require('./lib/prompts');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const {htmlBegin, htmlEmployeeCard, htmlEnd} = require('./lib/html');

// Constants for unchanging data items
const githubUrl = 'https://github.com/';

// Variables for changing data items
let team = [];

// Initiate application functionality
function main() {
  // Welcome message
  console.log('Creating a new team');

  // First "team member" is a Manager
  addManager();
}

// Prompt for info and create a new Manager
function addManager() {
  console.log('Enter team manager information...');

  // start screen prompts
  inquirer
    // get user input
    .prompt(questionsManager)
    // and process input
    .then((answers) => {
      // exctract values from answers array to create new Manager object
      let mgr = new Manager(...Object.values(answers));
      // push new Manager onto team array
      team.push(mgr);
      // console.log(team);
      addOtherTeamMember();
    })
  
}

// add more team members
function addOtherTeamMember() {
  console.log('Build team...');

  // start screen prompts
  inquirer
    // get user input
    .prompt(questionAddTeamMember)
    // and process input
    .then((answers) => {
      if(answers.addChoice === "engineer"){
        addEngineer();
      }
      else if(answers.addChoice === "intern") {
        addIntern();
      } else {
        finishTeam();
      };

    })
}

// add an engineer to the team
function addEngineer() {

  console.log('Add an Engineer...');

  // start screen prompts
  inquirer
    // get user input
   .prompt(questionsEngineer)
    // and process input
   .then((answers) => {
      console.log(answers);

      let eng = new Engineer(...Object.values(answers));
      // push new Engineer onto team array
      team.push(eng);
      console.log(team);
      addOtherTeamMember();
    })
}

// add an intern to the team
function addIntern() {

  console.log('Add an Intern...');

  // start screen prompts
  inquirer
    // get user input
   .prompt(questionsIntern)
    // and process input
   .then((answers) => {
      console.log(answers);

      let intern = new Intern(...Object.values(answers));
      // push new Engineer onto team array
      team.push(intern);
      console.log(team);
      addOtherTeamMember();
    })
}

// Call main function to start process
// main();


//FUNCTION WISHLIST
//------------------------------- 

function finishTeam() {
  console.log('Finished team...')
}

function generateHTML() {
  console.log('Generating HTML...');
  
  console.log(`${htmlBegin}\n${htmlEmployeeCard}\n${htmlEnd}`);
}

// console.log(generateHTML());