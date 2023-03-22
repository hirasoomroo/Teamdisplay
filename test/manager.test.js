
const Manager = require('../lib/manager');

describe('manager', () => {
    it('should return an object', () => {
        const person = new Manager ("Alice")

        
    });

    it('should return a name', () => {
        const person = new Manager ("Alice")

        expect(person.name).toEqual("Alice");

    });

    it('should return a id', () => {
        const person = new Manager ("Alice", 23);

        expect(person.id).toEqual(23);

    });

    it('should return a email', () => {
        const person = new Manager ("Alice", 23, "Alice@mail.com");

        expect(person.email).toEqual("Alice@mail.com");

    });

    it('should return a officenumber', () => {
        const person = new Manager ("Alice", 23, "Alice@mail.com", 3108192734);

        expect(person.officeNumber).toEqual(3108192734);

    });
});