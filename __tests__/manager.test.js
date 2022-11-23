'use strict';

const Manager = require('../lib/manager');

describe('Manager', () => {
  describe("Initialization", () => {
    it("should return an object containing undefined 'name', 'id', and 'email' properties when called with the 'new' keyword with no arguments", () => {
      const e = new Manager();

      expect(e).toEqual(
          expect.objectContaining({
            name: undefined, 
            id: undefined, 
            email: undefined, 
            position: "Manager",
            officeNumber: undefined}));
    });

    it("should return an object with 'name', 'id', 'email', and 'githubId' properties populated with values when called with the 'new' keyword with values supplied to arguments", () => {
      const e = new Manager("Ian D. Boss", "123", "dboss@dcompany.com", "5205551212");

      expect(e).toEqual(
          expect.objectContaining({ 
            name: "Ian D. Boss",
            id: "123",
            email: "dboss@dcompany.com", 
            position: "Manager",
            officeNumber: "5205551212" }));
    });
  });
});