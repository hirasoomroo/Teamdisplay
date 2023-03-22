
const Engineer = require('../lib/engineer');

describe('engineer', () => {
    it('should return an object', () => {
        const person = new Engineer("Alice")

    });

    it('should return a name', () => {
        const person = new Engineer("Alice")

        expect(person.name).toEqual("Alice");

    });

    it('should return a id', () => {
        const person = new Engineer("Alice", 23);

        expect(person.id).toEqual(23);

    });

    it('should return a email', () => {
        const person = new Engineer("Alice", 23, "Alice@mail.com");

        expect(person.email).toEqual("Alice@mail.com");

    });

    it('should return a github', () => {
        const person = new Engineer("Alice", 23, "Alice@mail.com", "AliceGithub");

        expect(person.github).toEqual("AliceGithub");

    });
});