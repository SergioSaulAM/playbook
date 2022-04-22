class Pokemon {
    constructor (name) {
        this.name = name;
    }

    sayHello () {
        console.log(`Mi pokemon ${this.name} te saluda!!!`);
    }

    sayMessage (saludo) {
        console.log(`Mi pokemon ${this.name} te dice: ${saludo}`);
    }
}

module.exports = Pokemon;