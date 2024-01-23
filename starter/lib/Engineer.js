// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Engineer.js
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email); // Call the parent class constructor
    this.github = github; // Additional property specific to Engineer
  }

  getRole() {
    return "Engineer"; // Return the role of the Engineer
  }

  getGithub() {
    return this.github; // Return the github username
  }
}

module.exports = Engineer;
