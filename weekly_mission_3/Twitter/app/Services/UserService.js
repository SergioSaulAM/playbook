const User = require('../../app/Models/User')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, 'Sin Bio');
    }
}

module.exports = UserService;