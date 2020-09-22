const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const {isEmail}= require("validator");


// array of questions for user
const questions = [
"What is the title of your project?", 
"Please describe your project", 
"Please give installation instructions", 
"Please enter information about usage",
"Please enter license information", 
"Please enter contribution guidelines",
"Please enter test instructions",
"What is your GitHub username?",
"What is your email address?" 
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err){
    if (err) throw err;
  });
}

// function to initialize program
function init() {
  // uses inquirer to prompt the user for information
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: questions[0],
      validate: function(val){
        if (val.length > 4) {
          return true;
        }
        return "Enter in 4 characters!";
      }
    },
    {
      type: "input",
      name: "description",
      message: questions[1]
    },
    {
      type: "input",
      name: "installation",
      message: questions[2]
    },
    {
      type: "input",
      name: "usage",
      message: questions[3]
    },
    {
      type: "list",
      name: "license",
      choices: ["MIT", "GPL v2", "Apache", "No License"],
      message: questions[4]
    },
    {
      type: "input",
      name: "contribution",
      message: questions[5]
    },
    {
      type: "input",
      name: "test",
      message: questions[6]
    },
    {
      type: "input",
      name: "github",
      message: questions[7]
    },
    {
      type: "input",
      name: "email",
      message: questions[8],
      validate: function(val) {
        if (isEmail(val)) {
          return true
        }
        return "Please enter a valid email!";
      }
    }
  ]);
}

// function call to initialize program
init()
  .then(function(answers){
    const readme = generateMarkdown(answers);
    return writeToFile("readme.md", readme);
  })
  .catch(function(err) {
    console.log(err);
  });
