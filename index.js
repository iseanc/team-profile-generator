// required Node.JS modules
const fs = require('fs');
const inquirer = require('inquirer');

// required user-defined modules
const {questionsEmployee, 
  questionsManager, 
  questionsEngineer, 
  questionsIntern, 
  questionAddTeamMember} = require('./lib/prompts');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const {htmlBegin, htmlEnd} = require('./lib/html');

// Constants for unchanging data items
// Base URL for GitHub profiles
const githubUrl = 'https://github.com/';

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

  // Variable(s) for changing data 
  // (a team of employees)
  // variable is declared in block scope and passed among functions to minimize side effects.
  let team = [];

  // start screen prompts
  inquirer
    // get user input
    .prompt(questionsManager)
    // and process input
    .then((answers) => {
      // extract values from answers array to create new Manager object
      let mgr = new Manager(...Object.values(answers));
      // push new Manager onto team array
      team.push(mgr);
      addTeamMember(team);
    })
  
}

// add more team members
function addTeamMember(team) {
  console.log('Build team...');

  // start screen prompts
  inquirer
    // get user input
    .prompt(questionAddTeamMember)
    // and process input
    .then((answers) => {
      if(answers.addChoice === "engineer"){
        addEngineer(team);
      }
      else if(answers.addChoice === "intern") {
        addIntern(team);
      } else {
        finishTeam(team);
      };

    })
}

// add an engineer to the team
function addEngineer(team) {

  console.log('Add an Engineer...');

  // start screen prompts
  inquirer
    // get user input
   .prompt(questionsEngineer)
    // and process input
   .then((answers) => {

      let eng = new Engineer(...Object.values(answers));
      // push new Engineer onto team array
      team.push(eng);
      addTeamMember(team);
    })
}

// add an intern to the team
function addIntern(team) {

  console.log('Add an Intern...');

  // start screen prompts
  inquirer
    // get user input
   .prompt(questionsIntern)
    // and process input
   .then((answers) => {

      let intern = new Intern(...Object.values(answers));
      // push new Engineer onto team array
      team.push(intern);
      addTeamMember(team);
    })
}

function finishTeam(team) {
  console.log('Finished team.  Generating HTML output')
  
  //call HTML builder
  createHTML(team);
}

// Creates HTML output
function createHTML(team) {
  console.log('Generating HTML...');
  
  //Calls function to generate employee HTML cards
  // console.log(`${htmlBegin}\n${createEmployeeHTMLCards(team)}\n${htmlEnd}`);

  // write HTML to disk in ./dist folder
  fs.writeFile(
    './dist/index.html', 
    `${htmlBegin}\n${createEmployeeHTMLCards(team)}\n${htmlEnd}`, (err) => err ? console.error(err) : console.log('Success!'));
}

// Create a set of employee HTML cards
function createEmployeeHTMLCards(team) {

  let htmlCards = [];

  // iterate through array of team members
  // for each member
  for (const member of team) {
    // call fn to create an HTML card
    htmlCards.push(getHtmlCard(member));
  }

  return htmlCards.join('\n');
  
}

// create an HTML Card
function getHtmlCard(member) {

  // this variable calls a function to get the appropriate unique properties of employee subclass objects (Engineer, Intern, Manager)
  let htmlCard = 
    `<div class="col bg-primary m-2 text-light">
      <h2>${member.name}</h2>
      <h3>${member.position}</h3>
      <div class="bg-light text-dark text-left m-1 p-1">
        <p>Emp ID: ${member.id}</p>
        <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
        <p>${getEmpSubclassProps(member)}</p>
      </div>
    </div>`;

    return htmlCard;
}

// returns appropriate employee subclass properties depending on the object.position property (matches subclass type)
function getEmpSubclassProps(member) {  
  if (member.position === "Manager"){
    return `Office Number: ${member.officeNumber}`;
  } else if (member.position === 'Intern'){ 
    return `School: ${member.school}`;
  } else if (member.position === 'Engineer'){  
    return `GitHub: <a target="_blank" href="${githubUrl + member.githubId}">${member.githubId}</a>`;
  }
}

// Call main function to start process
main();