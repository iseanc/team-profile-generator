'use strict';

const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, githubId) {
    super(name, id, email);
    this.githubId = githubId;
  }
}

module.exports = Engineer;