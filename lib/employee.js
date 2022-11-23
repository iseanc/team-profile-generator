'use strict';

class Employee {
  name;
  id;
  email;
  position;
  
  constructor(name, id, email, position) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.position = position;
  }
}

module.exports = Employee;
