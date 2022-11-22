const questionsEmployee = [
  {
    type: 'input',
    name: 'empName',
    message: 'Enter first name and last name.'
  },
  {
    type: 'input',
    name: 'empId',
    message: 'Enter employee ID: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email address'
  }
];

const questionsManager =  questionsEmployee.concat([{
    type: 'input',
    name: 'officeNumber',
    message: 'Enter manager Office Number: '
}]);

const questionsEngineer = questionsEmployee.concat([{
  type: 'input',
  name: 'githubUsername',
  message: 'Enter engineer GitHub username: '
}]);

const questionsIntern = questionsEmployee.concat([{
  type: 'input',
  name: 'school',
  message: 'Name of last school attended: '
 }]);

const questionAddTeamMember = [{
  type: 'list',
  name: 'teamMember',
  message: 'Add a team member?',
  choices: ['Engineer', 'Intern', 'Finish Building Team'],
  filter(val) {
    return val.toLowerCase();
  }
}];

// console.log("qEmp", questionsEmployee);
// console.log("qMgr", questionsManager);
// console.log("qEng", questionsEngineer);
// console.log("qInt", questionsIntern);
// console.log("qATM", questionAddTeamMember);

module.exports = {
  questionsEmployee, 
  questionsManager, 
  questionsEngineer, 
  questionsIntern, 
  questionAddTeamMember
};