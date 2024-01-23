TODO: Write Code to gather information about the development team members, and render the HTML file.
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
  // Start by gathering manager info, then present menu
}

function createManager() {
  // Use inquirer to prompt for manager info, then push new Manager to teamMembers
}

function addEngineer() {
  // Use inquirer to prompt for engineer info, then push new Engineer to teamMembers
}

function addIntern() {
  // Use inquirer to prompt for intern info, then push new Intern to teamMembers
}

function buildTeam() {
  // Use the render function to generate and write the HTML to 'team.html'
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

startApp();
