//TODO: Write Code to gather information about the development team members, and render the HTML file.
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./src/page-template");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];

function startApp() {
  function createManager() {
    // Use inquirer to prompt for manager info, then push new Manager to teamMembers

    console.log("Please build your team.");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the team manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the team manager's id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the team manager's email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the team manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        teamMembers.push(manager);
        gatherTeamMembers();
      });
  }
  function gatherTeamMembers() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "menuOption",
          message: "What would you like to do next?",
          choices: ["Engineer", "Intern", "Finish building the team"],
        },
      ])
      .then((answers) => {
        switch (answers.menuOption) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    // Use inquirer to prompt for engineer info, then push new Engineer to teamMembers
    console.log("Add an Engineer to your team:");
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        gatherTeamMembers();
      });
  }

  function addIntern() {
    // Use inquirer to prompt for intern info, then push new Intern to teamMembers
    console.log("Add an Intern to your team:");
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "Which school is the intern attending?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        gatherTeamMembers();
      });
  }

  function buildTeam() {
    // Use the render function to generate and write the HTML to 'team.html'
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    console.log("Succesfully built the team!");
  }
  createManager();
}
startApp();
