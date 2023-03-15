// ! Import the Employee class from lib.js
const Employee = require("../lib/Employee");

// ! Define a variable for the test employee data
const testEmployee = {
  name: "Salvador Espinosa Valdez",
  id: 101,
  email: "espinosasalvador94@outlook.com",
};

// ! Create a describe block for the Employee class tests
describe("Employee", () => {
  // ! Create a test for the constructor
  it("should create an employee object with name, id, and email properties", () => {
    const employee = new Employee(
      testEmployee.name,
      testEmployee.id,
      testEmployee.email
    );

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });

  // ! Create a test for the getId() method
  it("should get the employee id", () => {
    const employee = new Employee(
      testEmployee.name,
      testEmployee.id,
      testEmployee.email
    );

    expect(employee.getId()).toEqual(testEmployee.id);
  });

  // ! Create a test for the getEmail() method
  it("should get the employee email", () => {
    const employee = new Employee(
      testEmployee.name,
      testEmployee.id,
      testEmployee.email
    );

    expect(employee.getEmail()).toEqual(testEmployee.email);
  });

  // ! Create a test for the getRole() method
  it("should get the role of the employee", () => {
    const employee = new Employee(
      testEmployee.name,
      testEmployee.id,
      testEmployee.email
    );

    expect(employee.getRole()).toEqual("Employee");
  });
});
