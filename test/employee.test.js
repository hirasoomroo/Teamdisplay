
const Employee = require('../lib/employee');

describe('employee', () => {
    it('should return an object', () => {
        const person = new Employee("Alice")

        
    });

    it('should return a name', () => {
        const person = new Employee("Alice")

        expect(person.name).toEqual("Alice");

    });

    it('should return a id', () => {
        const person = new Employee("Alice", 23);

        expect(person.id).toEqual(23);

    });

    it('should return a email', () => {
        const person = new Employee("Alice", 23, "Alice@mail.com");

        expect(person.email).toEqual("Alice@mail.com");

    });
});