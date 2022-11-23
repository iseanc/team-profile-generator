'use strict';

const Employee = require('./employee');

class Intern extends Employee{
  
  constructor(name, id, email, school) {
    const position = "Intern";
    super(name, id, email, position);
    this.school = school;
  }
}

module.exports = Intern;
