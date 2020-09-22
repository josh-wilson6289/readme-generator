// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing 
  ${data.contribution}

  ## Tests 
  ${data.test}

  ## Contact 
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
