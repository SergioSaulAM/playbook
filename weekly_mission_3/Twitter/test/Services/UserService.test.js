const UserService = require('../../app/Services/UserService')

describe('Unit Testing User Service', () => {
    test('1) Create a new user using the UserService', () => {
        const user = UserService.create(1, 'sergiosaul', 'Sergio');
        expect(user.username).toBe('sergiosaul');
        expect(user.name).toBe('Sergio');
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })
})