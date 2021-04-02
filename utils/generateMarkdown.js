// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//'Boost','IBM', 'MIT', 'ISC', 'none'
var badge;
function renderLicenseBadge(license) {
  
//   if (license = "Boost") {
//   badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
// } else if (license = "MIT") {
//   badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
// } else if (license = "ISC") {
//   badge = "[[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
// } else if (license = "IBM") {
//   badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
// } else (license = "none") {
//   badge = ""

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string  
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
## Discription
${data.discription}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Installation

${data.installation}
  
## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## License
${data.license}


## Questions
my github profile [here](www.github.com/${data.username})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;





// if (license = "GNU GPL v3") {
//   badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
// } else if (license = "MIT") {
//   badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
// } else if (license = "Mozilla Public License 2.0") {
//   badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
// } else if (license = "The Unlicense") {
//   badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
// }
