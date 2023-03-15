// ! Import the Manager class from lib.js
const Manager = require("../lib/Manager");

// ! Create a describe block for the Manager class tests
describe("Manager", () => {
  // ! Create a describe block for the initialization tests
  describe("Initialization", () => {
    // ! Create a test for the constructor
    it("should create an object with name, id, email, and office number", () => {
      // ! Create a manager object with test data
      const manager = new Manager(
        "Salvador Espinosa Valdez",
        101,
        "espinosasalvador94@outlook.com",
        647
      );

      // ! Assert that the manager object has the correct properties and values
      expect(manager.name).toEqual("Salvador Espinosa Valdez");
      expect(manager.id).toEqual(101);
      expect(manager.email).toEqual("espinosasalvador94@outlook.com");
      expect(manager.officeNumber).toEqual(647);
    });
  });

  // ! Create a describe block for the getOfficeNumber() method tests
  describe("getOfficeNumber", () => {
    // ! Create a test for the getOfficeNumber() method
    it("should return the office number", () => {
      // ! Create a manager object with test data
      const manager = new Manager(
        "Salvador Espinosa Valdez",
        101,
        "espinosasalvador94@outlook.com",
        647
      );
      // ! Call the getofficeNumber() method on the manager object and save the result
      const officeNumber = manager.getofficeNumber();

      // ! Assert that the returned office number is equal to the manager's office number property
      expect(officeNumber).toEqual(manager.officeNumber);
    });
  });

  // ! Create a describe block for the getRole() method tests
  describe("getRole", () => {
    // ! Create a test for the getRole() method
    it("should return the role of the manager", () => {
      // ! Create a manager object with test data
      const manager = new Manager(
        "Salvador Espinosa Valdez",
        101,
        "espinosasalvador94@outlook.com"
      );
      // ! Call the getRole() method on the manager object and save the result
      const role = manager.getRole();

      // ! Assert that the returned role is "Manager"
      expect(role).toEqual("Manager");
    });
  });
});
