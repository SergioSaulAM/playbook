const User = require('../../app/Models/User')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, 'Sin Bio');
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio];
    }

    static updateUserUsername(user, newUsername) {
        user.username = newUsername;
    }

    static getAllUsernames(users) {
        const allUsernames = users.map(a => a.username);
        return allUsernames;
    }
}

module.exports = UserService;