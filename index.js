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
  fs.writeFile(`./generated-readme/${fileName}`, data, function(err){
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
        if (val.length > 1) {
          return true;
        }
        return "Invalid Input";
      }
    },
    {
      type: "input",
      name: "description",
      message: questions[1],
      validate: function(val){
        if (val.length > 1) {
          return true;
        }
        return "Invalid Input";
      }
    },
    {
      type: "input",
      name: "installation",
      message: questions[2],
      validate: function(val){
        if (val.length > 1) {
          return true;
        }
        return "Invalid Input";
      }
    },
    {
      type: "input",
      name: "usage",
      message: questions[3],
      validate: function(val){
        if (val.length > 1) {
          return true;
        }
        return "Invalid Input";
      }
    },
    {
      type: "list",
      name: "license",
      choices: ["MIT", "GPL v2", "Apache", "No License"],
      message: questions[4],
      validate: function(val){
        if (val.length > 1) {
          return true;
        }
        return "Invalid Input";
      }
    },
    {
      type: "input",
      name: "contribution",
      message: questions[5],
      validate: function(val){
        if (val.length > 1) {
          return true;
        }
        return "Invalid Input";
      }
    },
    {
      type: "input",
      name: "test",
      message: questions[6],
      validate: function(val){
        if (val.length > 1) {
          return true;
        }
        return "Invalid Input";
      }
    },
    {
      type: "input",
      name: "github",
      message: questions[7],
      validate: function(val){
        if (val.length > 1) {
          return true;
        }
        return "Invalid Input";
      }
    },
    {
      type: "input",
      name: "email",
      message: questions[8],
      validate: function(val) {
        if (isEmail(val)) {
          return true
        }
        return "Invalid Email";
      }
    }
  ]);
}

// function call to initialize program
init()
  .then(function(answers){
    const readme = generateMarkdown(answers);
    return writeToFile("README.md", readme);
  })
  .catch(function(err) {
    console.log(err);
  });
