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

  getName() {
    return this.name;
  }

  getId() {
      return this.id;
  }

  getEmail() {
      return this.email;
  }

  getRole() {
        return "Employee";
    }

}

module.exports = Employee;
