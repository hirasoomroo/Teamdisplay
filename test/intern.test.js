
const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should return an object', () => {
        const person = new Intern("Alice")

        
    });

    it('should return a name', () => {
        const person = new Intern("Alice")

        expect(person.name).toEqual("Alice");

    });

    it('should return a id', () => {
        const person = new Intern("Alice", 23);

        expect(person.id).toEqual(23);

    });

    it('should return a email', () => {
        const person = new Intern("Alice", 23, "Alice@mail.com");

        expect(person.email).toEqual("Alice@mail.com");

    });


    it('should return a school', () => {
        const person = new Intern("Alice", 23, "Alice@mail.com", "UCI");

        expect(person.school).toEqual("UCI");

    });
});