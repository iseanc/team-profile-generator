'use strict';

const Employee = require('./employee');

class Engineer extends Employee {
  
  constructor(name, id, email, githubId) {
    const position = "Engineer";
    super(name, id, email, position);
    this.githubId = githubId;
  }
}

module.exports = Engineer;
