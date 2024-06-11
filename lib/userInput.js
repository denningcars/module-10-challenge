const inquirer = require ('inquirer');

// Handle user input
async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: function(input) {
                if (input.length > 3) {
                    return 'Logo text must be up to three characters long. Please amend the above.';
                }
                return true;
            }            
        },
        {
            type: 'input',
            name: 'textColour',
            message: 'Enter text color (keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColour',
            message: 'Enter shape fill color (keyword or hexadecimal number):',
        },
        {
            type: 'input',
            name: 'backgroundColour',
            message: 'Enter background color (keyword or hexadecimal number):',
        },
    ]);

    return userInput;
}

module.exports = getUserInput;