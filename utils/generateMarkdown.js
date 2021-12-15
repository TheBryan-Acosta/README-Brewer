
//checks which license the user chose, and returning a url of the coresponding badge license as a literal
const renderLicenseBadge = license => {
  if(license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license == 'GPLv3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if(license == 'Apache 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license == 'BSD'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if(license == 'Public Domain'){
    return ``
  }
}


// returns a table of contents literal, adding a section if it exists(has user input)
// takes data as a parameter, (user anwsers), adds to the literal if the user inputed on that field
const renderTableofContents = data =>{
    if(data.confirmTable == false){
    return '';
  }
  var literal = `## **Table of Contents**`;
  if(data.installation){
    literal = literal + `\n* [Installation](#installation)`
  }
  if(data.usage){
    literal = literal + `\n* [Usage](#usage)`
  }
  if(data.credits){
    literal = literal + `\n* [Credits](#credits)`
  }
  if(data.contributing){
    literal = literal + `\n* [Contributing](#contributing)`
  }
  if(data.tests){
    literal = literal + `\n* [Tests](#tests)`
  }
  if(data.confirmcontactInfo == true){
    literal = literal + `\n* [Questions](#questions)`
  }
  if(data.license){
    literal = literal + `\n* [License](#license)`
  }
  

  return (literal + `\n---`);
}

//returns the installation section literal, if it exist
const renderInstallation = installation =>{
    if(!installation){
    return '';
  }
  return `
## **Installation**

${installation}`;
}

//returns the usage section literal (Header and user input), if it exist
const renderUsage = usage =>{
    if(!usage){
    return '';
  }
  return `
## **Usage**

${usage} `;
}

//returns the credits section literal (Header and user input), if it exist
const renderCredits = credits =>{
    if(!credits){
    return '';
  }
  return `
## **Credits**

${credits}`;
}

//returns the literal for the link associated with the chosen license
const renderLicense = license => {
   if(license == 'MIT'){
    return `## License

[Info on MIT](https://opensource.org/licenses/MIT)
    `
  }
  if(license == 'GPLv3'){
    return `## License

[Info on GPLv3](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if(license == 'Apache 2.0'){
    return `## License

[Info on Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license == 'BSD'){
    return `## License

[Info on BSD](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if(license == 'Public Domain'){
    return ``
  }
}

//returns the literal for the license description
const renderLicenseDesc = data => {
  if(data.license == 'MIT'){
    return `Copyright 2021 ${data.name}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
  }
  if(data.license == 'GPLv3'){
    return `
Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.
    `
  }
  if(data.license == 'Apache 2.0'){
    return `
Copyright 2021 ${data.name}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
    `
  }
  if(data.license == 'BSD'){
    return `
Copyright 2021 ${data.name}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    `
  }
  if(data.license == 'Public Domain'){
    return ``
  }
};

//returns the literal for the contribution section, if it exists
const renderContributing = contribute => {
    if(!contribute){
    return '';
  }
  return `
## **Contributing**

${contribute}`;
}

//returns the test section literal(Header and user input), if it exists
const renderTests = tests =>{
    if(!tests){
    return '';
  }
  return `
## **Tests**

${tests}`;
}

//returns the contact section literal(Header and user input), if it exists
const renderContact = data =>{
  if(data.confirmcontactInfo == false){
    return '';
  }

  return `## **Questions**
GitHub Username: [${data.githubUser}](https://github.com/${data.githubUser})
Email Address: ${data.emailAddy}

${data.contactInstructions}`
}

//This will create the final markdown that will be passed into writing the file
//I chose to create independant functions for each section, to validate if it exist
//and smack a header and its information if it does.
function generateMarkdown(data) {
    return `
# ${data.projTitle}

${renderLicenseBadge(data.license)}

## **Description**

${data.projDescription}
${renderTableofContents(data)}
${renderInstallation(data.installation)}
${renderUsage(data.usage)}
${renderCredits(data.credits)}
${renderContributing(data.contributing)}
${renderTests(data.tests)}
${renderContact(data)}

---
${renderLicense(data.license,)}
${renderLicenseDesc(data)}
`;
}

module.exports = generateMarkdown;
