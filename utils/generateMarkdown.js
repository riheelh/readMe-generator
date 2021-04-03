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

  if(data.discription !== '') {
    var Desc = `
## Description  
${data.discription}`
  } else {
    Desc = ``
  }

  if(data.installation !== '') {
    var installTOC = `- [Installation](#Installation)<br>`
    var installation = `
## Installation  
${data.installation}`
  } else {
    installation = ``
    installTOC = ``
  }

  if(data.usage !== '') {
    var usageTOC = `- [Usage](#Usage)<br>`
    var usage = `
## Usage  
${data.usage}`
  } else {
    usage = ``
    usageTOC = ``
  }

  if(data.contribution !== '') {
    var contributionTOC = `- [Contributing](#Contributing)<br>`
    var contribution = `
## Contributing
${data.contribution}`
  } else {
     contribution = ``
     contributionTOC = ``
  }

  if(data.test !== '') {
    var testTOC = `- [Tests](#Tests)<br>`
    var test = `
## Tests
${data.test}`
  } else {
    test = ``
    testTOC = ``
  }

  if(data.license !== '') {
    var licenseTOC = `- [License](#License)<br>`
    var section2 = `
## License
${section}`
  } else {
    section2 = ``
    licenseTOC = ``
  }

  if(data.username !== '' || data.email !== '') {
    var questionTOC = `- [Questions](#Questions)`
    var question = `
## Questions
Github: [@${data.username}](www.github.com/${data.username}) <br>
Email: ${data.email}`

  } else {
    question = ``
    questionTOC = ``
  }

  return `
# ${data.title}

${newBadge}

${Desc}

## Table of Contents

${installTOC}
${usageTOC}
${contributionTOC}
${testTOC}
${licenseTOC}
${questionTOC}

${installation}


${usage}


${contribution}


${test}


${section2}


${question}

`;
}

module.exports = generateMarkdown;

