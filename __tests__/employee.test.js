'use strict';

const Employee = require('../lib/employee');

describe('Employee', () => {
  describe("Initialization", () => {
    it("should return an object containing undefined 'name', 'id', and 'email' properties when called with the 'new' keyword with no arguments", () => {
      const e = new Employee();

      expect(e).toEqual(expect.objectContaining({ 
        name: undefined, 
        id: undefined, 
        email: undefined,
        position: undefined }));
    });

    it("should return an object with 'name', 'id', and 'email' properties populated with values when called with the 'new' keyword with values supplied to arguments", () => {
      const e = new Employee("Ian D. Boss", "123", "dboss@dcompany.com", "TBD");

      expect(e).toEqual(expect.objectContaining({ 
        name: "Ian D. Boss", 
        id: "123", 
        email: "dboss@dcompany.com",
        position: "TBD" }));
    });
  });
});

