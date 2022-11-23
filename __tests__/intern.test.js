'use strict';

const Intern = require('../lib/intern');

describe('Intern', () => {
  describe("Initialization", () => {
    it("should return an object containing undefined 'name', 'id', 'email', 'position' and 'school' properties when called with the 'new' keyword with no arguments", () => {
      const e = new Intern();

      expect(e).toEqual(expect.objectContaining({ 
        name: undefined, 
        id: undefined, 
        email: undefined,
        position: "Intern", 
        school: undefined}));
    });

    it("should return an object with 'name', 'id', 'email', 'position, and 'school' properties populated with values when called with the 'new' keyword with values supplied to arguments", () => {
      const e = new Intern("Stu Dent", "345", "student@dcompany.com", "MIT");

      expect(e).toEqual(expect.objectContaining({ name: "Stu Dent", id: "345", email: "student@dcompany.com", position: "Intern", school: "MIT" }));
    });
  });
});