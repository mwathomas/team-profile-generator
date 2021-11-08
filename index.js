const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./roles/employee");
const Manager = require("./roles/manager");
const Engineer = require("./roles/engineer");
const Intern = require("./roles/intern");
const team = [];

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager for the team?",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      team.push(manager);
      console.log(team);
      console.log(manager);
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Which is your employee's role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email.",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the employee's github username.",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "more",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, more } = employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      team.push(employee);

      if (more) {
        return addEmployee(team);
      } else {
        return team;
      }
    });
};
addManager()
  .then(addEmployee)
  .catch((err) => {
    console.log(err);
  });
