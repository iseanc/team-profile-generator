'use strict';

const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  describe("Initialization", () => {
    it("should return an object containing undefined 'name', 'id', 'email' and 'position' properties when called with the 'new' keyword with no arguments", () => {
      const e = new Engineer();

      expect(e).toEqual(
        expect.objectContaining({ 
          name: undefined,
          id: undefined, 
          email: undefined, 
          position: "Engineer",
          githubId: undefined}));
    });

    it("should return an object with 'name', 'id', 'email', and 'githubId' properties populated with values when called with the 'new' keyword with values supplied to arguments", () => {
      const e = new Engineer("Ed Engineer", "234", "someengineer@dcompany.com", "appmaker");

      expect(e).toEqual(expect.objectContaining({ name: "Ed Engineer", id: "234", email: "someengineer@dcompany.com", position: "Engineer", githubId: "appmaker" }));
    });
  });
});

