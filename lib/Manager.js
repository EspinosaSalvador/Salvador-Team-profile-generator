// ! imported empoloyee js duet that will be repeating this code several times and we can save time by exporting.
const Employee = require("./Employee");

function Manager(name, id, email, officeNumber) {
  Employee.call(this, name, id, email);
  this.officeNumber = officeNumber;

  this.getOfficeNumber = function () {
    return this.officeNumber;
  };

  this.getRole = function () {
    return "Manager";
  };
}

module.exports = Manager;
