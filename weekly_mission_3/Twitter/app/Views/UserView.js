const UserService = require('./../../app/Services/UserService')

class UserView {
    static createUser(payload) {
        if(payload === null) {
            payload = UserService.create(1, 'sergiosaul', 'Sergio');
            payload.error = 'payload no existe'
        } else if(typeof payload.username !== 'string' && typeof payload.id === 'string' && typeof payload.name === 'number') {
            payload = UserService.create(1, 'sergiosaul', 'Sergio');
            payload.error = 'necesitan tener un valor válido'
        } else if (payload.name == null || payload.username == null || payload.id == null) {
            payload = UserService.create(1, 'sergiosaul', 'Sergio');
            payload.error = 'necesitan tener un valor válido'
        }
        return payload;
    }
}

module.exports = UserView;