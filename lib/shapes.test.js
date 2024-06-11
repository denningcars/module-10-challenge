const { Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle', () => { 
    it('should render a triangle with the specified color of blue', () => {
        const shape = new Triangle('blue');
        console.log(shape.render());
        expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
});

describe('Circle', () => { 
    it('should render a circle with the specified color of white', () => {
        const shape = new Circle('white');
        console.log(shape.render());
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="white" />');
    });
});


describe('Square', () => { 
    it('should render a square with the specified color of cyan', () => {
        const shape = new Square('cyan');
        console.log(shape.render());
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="cyan" />');
    });
});