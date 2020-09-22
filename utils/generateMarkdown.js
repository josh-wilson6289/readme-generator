// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact](#contact)
  
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
  [GitHub Page](https://www.github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
