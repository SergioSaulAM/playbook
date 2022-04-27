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

    test('User username is OK with Getters', () => {
        const User1 = new User(1, 'Juanito', 'Juan', 'Lorem Ipsum', '25/04/2015');
        expect('Juanito').toBe(User1.getUsername);
    })

    test('User Bio is OK with Getters', () => {
        const User1 = new User(1, 'Juanito', 'Juan', 'Lorem Ipsum', '25/04/2015');
        expect('Lorem Ipsum').toBe(User1.bio);
    })    

    test('Changing Username with Setters', () => {
        const User1 = new User(1, 'Juanito', 'Juan', 'Lorem Ipsum', '25/04/2015');
        User1.setUsername = "Pablito";
        expect('Pablito').toBe(User1.username);
    })    

    test('Changing Bio with Setters', () => {
        const User1 = new User(1, 'Juanito', 'Juan', 'Lorem Ipsum', '25/04/2015');
        User1.setBio = "Lorem";
        expect('Lorem').toBe(User1.bio);
    })
})