class User {
    constructor(id, username, name, bio, dateCreated){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = dateCreated;
        this.lastUpdate = new Date();
    }
}

module.exports = User;