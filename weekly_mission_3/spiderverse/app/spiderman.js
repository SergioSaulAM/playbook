class SpiderMan {
    constructor(name, age, actor, movies, studio) {
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.movies = movies;
        this.studio = studio;
    }

    getInfo() {
        console.log(`Hey, I'm ${this.actor} from ${this.studio}`);
    }
}

module.exports = SpiderMan;