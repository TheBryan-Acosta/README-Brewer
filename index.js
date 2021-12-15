//Include packages needed for this application & our generatePage(markdown creation)
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');

//using inquirer we pompt the user for inputs
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projTitle',
            message: 'Enter your project title. (Required)',
            validate: projInput => {
                if (projInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projDescription',
            message: 'Enter your project Description. (Required)',
            validate: projInput => {
                if (projInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTable',
            message: 'Would you like to add a table of contents?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter your projects installation steps.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your projects usage information.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter information for any contribution guidelines on your project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter information for any tests instructions in your project'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name (Required)',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to feature on your project?',
            choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD', 'Public Domain']
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter your information for credits'
        },
        {
            type: 'confirm',
            name: 'confirmcontactInfo',
            message: 'Would you like to include contact information?'

        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your github username? (Required)',
            validate: githubUserInput => {
                if (githubUserInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                return false;
                }
            },
            when: ({ confirmcontactInfo }) => confirmcontactInfo
        },
        {
            type: 'input',
            name: 'emailAddy',
            message: 'What is your email address? (Required)',
            validate: emailAddyInput => {
                if (emailAddyInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                return false;
                }
            },
            when: ({ confirmcontactInfo }) => confirmcontactInfo
        },
        {
            type: 'input',
            name: 'contactInstructions',
            message: 'Enter any instructions for contacting you. (Required)',
            validate: contactInstructionsInput => {
                if (contactInstructionsInput) {
                    return true;
                } else {
                    console.log('Please enter contact instructions!');
                return false;
                }
            },
            when: ({ confirmcontactInfo }) => confirmcontactInfo
        }

        
    ])
}

//using fs we create pass our content, and create a new .md file in our dist directory
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

//start out prompts, then pass the inputs to our generatePage function,then we pass that
//markdown to our writefile function to create our file.
promptUser()
.then(READMEData => {
    return(generatePage(READMEData));
  })
  .then(pageMD => {
    return(writeFile(pageMD));
  })
  .catch(err => {
    console.log(err);
  });
