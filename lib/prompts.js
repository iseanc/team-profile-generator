// Prompts for core Employee class
const questionsEmployee = [
  {
    type: 'input',
    name: 'empName',
    message: 'Enter employee first name:'
  },
  {
    type: 'input',
    name: 'empId',
    message: 'Enter employee ID: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email address: '
  }
];

// Additional prompts to create a manager
const questionsManager =  questionsEmployee.concat([{
    type: 'input',
    name: 'officeNumber',
    message: 'Enter manager Office Number: '
}]);

// Additional prompts to create an engineer
const questionsEngineer = questionsEmployee.concat([{
  type: 'input',
  name: 'githubUsername',
  message: 'Enter engineer GitHub username: '
}]);

// Additional prompts to create an intern
const questionsIntern = questionsEmployee.concat([{
  type: 'input',
  name: 'school',
  message: 'Name of last school attended: '
 }]);

// prompt to add additional team member, or finish
const questionAddTeamMember = [{
  type: 'list',
  name: 'addChoice',
  message: 'Add another team member?',
  choices: ['Engineer', 'Intern', 'Finish Building Team'],
  filter(val) {
    return val.toLowerCase().replaceAll(' ','');
  }
}];

module.exports = {
  questionsEmployee, 
  questionsManager, 
  questionsEngineer, 
  questionsIntern, 
  questionAddTeamMember
};