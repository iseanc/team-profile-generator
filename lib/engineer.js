'use strict';

const Employee = require('./employee');

class Engineer extends Employee {
  
  githubId;

  constructor(name, id, email, githubId) {
    const position = "Engineer";
    super(name, id, email, position);
    this.githubId = githubId;
  }

  getGithubId() {
    return this.githubId;
  }

  getRole() { return "Engineer"};
  
}

module.exports = Engineer;
