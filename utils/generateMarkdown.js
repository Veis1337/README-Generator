// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  ["MIT", "BSD 3-Clause", "BSD 2-Clause", "GPL", "Apache 2.0", "LGPL", "MPL 2.0", "CDDL", "EPL"]
  let badge = "";
  switch (response) {
    case "MIT":
      badge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
      break;
    case "BSD 3-Clause":
      badge = `https://img.shields.io/badge/License-BSD%203--Clause-orange.svg`;
      break;
    case "BSD 2-Clause":
      badge = `https://img.shields.io/badge/License-BSD%202--Clause-orange.svg`;
      break;
    case "GPL":
      badge = `https://img.shields.io/badge/License-LGPL%20v3-blue.svg`;
      break;
      case "Apache 2.0":
        badge = `https://img.shields.io/badge/License-Apache%202.0-green.svg`;
        break;
    case "LGPL":
      badge = `https://img.shields.io/badge/License-LGPL%20v3-blue.svg`;
      break;
    case "MPL 2.0":
      badge = `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`;
      break;
    case "CDDL":
      badge = `https://img.shields.io/badge/License-CDDL%201.0-lightblue.svg`;
      break;
    case "EPL":
      badge = `https://img.shields.io/badge/License-EPL%201.0-red.svg`;
      break;
    default:
      badge = "";
    
  }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
  let link = "";
  switch (response) {
    case "MIT":
      link = `https://opensource.org/licenses/MIT`;
      break;
    case "BSD 3-Clause":
      link = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case "BSD 2-Clause":
      link = `https://opensource.org/licenses/BSD-2-Clause`;
      break;
    case "GPL":
      link = `https://www.gnu.org/licenses/gpl-3.0`;
      break;
      case "Apache 2.0":
        link = `https://opensource.org/licenses/Apache-2.0`;
        break;
    case "LGPL":
      link = `https://www.gnu.org/licenses/lgpl-3.0`;
      break;
    case "MPL":
      link = `https://opensource.org/licenses/MPL-2.0`;
      break;
    case "CDDL":
      link = `https://opensource.org/licenses/CDDL-1.0`;
      break;
    case "EPL":
      link = `https://opensource.org/licenses/EPL-1.0`;
      break;
    default:
      link = "";
}
      return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === "") {
    let licenseSection = "";
    return licenseSection;
  } else {
    let licenseSection = `![License](${renderLicenseBadge(license)})\n 
  For more information about this license - <${renderLicenseLink(license)}>`
    return licenseSection;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ## License 
  ${renderLicenseSection(response.license)} 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)

  ## Description

  My motivation for this project was - ${response.motivation}
  I build this project because - ${response.why}
  The problem this project solves is - ${response.problem}
  Developing this project I learned - ${response.learn}

  ## Installation

  To install this project - ${response.install}

  ## Usage

  To use this project - ${response.instructions}

  ## Contributing

  ${response.credits}

  ## Testing

  ## Questions

  ${response.name}

  GitHub - https://github.com/${response.git} 

  For any questions regarding this project, feel free to reach out to me at ${response.email} 
  `
}


module.exports = generateMarkdown;
