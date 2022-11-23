'use strict';

const Employee = require('./employee');

class Intern extends Employee{

  school; 
  
  constructor(name, id, email, school) {
    const position = "Intern";
    super(name, id, email, position);
    this.school = school;
  }

  getSchool() {
      return this.school;
    }
  
  getRole() {return "Intern"};
  
}

module.exports = Intern;
