'use strict';

const Employee = require('./employee');

class Manager extends Employee{
  officeNumber

  constructor(name, id, email, officeNumber) {
    const position = "Manager";
    super(name, id, email, position);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;