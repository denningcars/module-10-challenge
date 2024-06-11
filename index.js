const getUserInput = require('./lib/userInput'); 
const { Triangle, Circle, Square } = require('./lib/shapes'); 
const fs = require('fs');

function main() {
    getUserInput().then(userInput => {
        let shapeProperty;

        if (userInput.shape === 'circle') {
            shapeProperty = new Circle(userInput.shapeColour);
        } else if (userInput.shape === 'triangle') {
            shapeProperty = new Triangle(userInput.shapeColour);
        } else if (userInput.shape === 'square') {
            shapeProperty = new Square(userInput.shapeColour);
        } else {
            console.log('Invalid shape choice.');
            return;
        }

        // Generate SVG content
        const svgContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="100%" fill="${userInput.backgroundColour}" />
                ${shapeProperty.render()}
                <text x="150" y="110" text-anchor="middle" font-size="30" fill="${userInput.textColour}">
                    ${userInput.text}
                </text>
            </svg>
        `;

        // Save SVG content to a file named 'logo.svg'
        fs.writeFileSync('./examples/logo.svg', svgContent);

        console.log('Generated logo.svg');

    }).catch(error => {
        console.error('Error --> ', error);
    });
}

main();