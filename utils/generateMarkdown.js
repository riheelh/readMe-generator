//Create a function that returns a license badge based on which license is passed in
var badge;
function renderLicenseBadge(license) {
  
  if (license == "Boost") {
  badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"}
  else if (license == "MIT") {
  badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
  else if (license == "ISC") {
  badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"}
  else if (license == "IBM") {
  badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"}
  else if (license == ``) {
  badge = ""}
return badge
}

var link;
//function that returns the license link
function renderLicenseLink(license) {
  if (license == "Boost") {
    link = "[Boost](https://www.boost.org/LICENSE_1_0.txt)"}
    else if (license == "MIT") {
    link = "[MIT](https://opensource.org/licenses/MIT)"}
    else if (license == "ISC") {
    link = "[ISC](https://opensource.org/licenses/ISC)"}
    else if (license == "IBM") {
    link = "[IBM](https://opensource.org/licenses/IPL-1.0)"}
    else if (license == '') {
    link = ""}
  return link
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  var a2 =  renderLicenseLink(license)
  return `
${a2}
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var newBadge = renderLicenseBadge(data.license)
  var section = renderLicenseSection(data.license)

  return `
# ${data.title}

${newBadge}

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

${section}


## Questions

Github: [@${data.username}](www.github.com/${data.username})<br>
Email: ${data.email}
`;
}

module.exports = generateMarkdown;

