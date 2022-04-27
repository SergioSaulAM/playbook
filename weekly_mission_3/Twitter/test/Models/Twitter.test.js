const User = require('../../app/Models/User');

describe('Prueba de twitter', () => {
    test('LastUpdate User is OK', () => {
        const User1 = new User(1, 'Juanito', 'Juan', 'Lorem Ipsum', '25/04/2015');
        expect(User1.lastUpdated).not.toBeUndefined();
    })

    test('User username is OK', () => {
        const User1 = new User(1, 'Juanito', 'Juan', 'Lorem Ipsum', '25/04/2015');
        expect(User1.username).toBe('Juanito');
    })

    test('User id is OK', () => {
        const User1 = new User(1, 'Juanito', 'Juan', 'Lorem Ipsum', '25/04/2015');
        expect(User1.id).toBe(1);
    })

    test('User bio is OK', () => {
        const User1 = new User(1, 'Juanito', 'Juan', 'Lorem Ipsum', '25/04/2015');
        expect(User1.bio).toBe('Lorem Ipsum');
    })
})