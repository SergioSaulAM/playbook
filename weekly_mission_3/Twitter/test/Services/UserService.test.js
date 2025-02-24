const UserService = require('../../app/Services/UserService')

describe('Unit Testing User Service', () => {
    test('1) Create a new user using the UserService', () => {
        const user = UserService.create(1, 'sergiosaul', 'Sergio');
        expect(user.username).toBe('sergiosaul');
        expect(user.name).toBe('Sergio');
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })

    test('2) Get all user data in one list', () => {
        const user = UserService.create(1, 'sergiosaul', 'Sergio');
        // console.log(UserService.getInfo(user));
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe('sergiosaul');
        expect(userInfoInList[2]).toBe('Sergio');
        expect(userInfoInList[3]).toBe('Sin Bio');
    })

    test('3) Update username', () => {
        const user = UserService.create(1, 'sergiosaul', 'Sergio');
        UserService.updateUserUsername(user, 'sergios');
        expect(user.username).toBe('sergios');
    })

    test('4) Given a list of users give me the list of usernames', () => {
        const user1 = UserService.create(1, 'sergiosaul1', 'Sergio');
        const user2 = UserService.create(1, 'sergiosaul2', 'Sergio');
        const user3 = UserService.create(1, 'sergiosaul3', 'Sergio');
        const usernames = UserService.getAllUsernames([user1, user2, user3]);
        expect(usernames).toContain('sergiosaul2');
        expect(usernames).toContain('sergiosaul3');
    })
})