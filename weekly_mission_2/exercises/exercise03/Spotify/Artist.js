class Artist {
    constructor(name, monthlyListeners, popularSongs, albums) {
        this.name = name;
        this.monthlyListeners = monthlyListeners;
        this.popularSongs = popularSongs;
        this.albums = albums;
    }
}

const Artist1 = new Artist("Kenneth Rojas", 32429, ["Es Tu Gloria", "Paz", "Quién Como Él", "Dichosos"], ["Dichosos", "Para Esto Nacimos", "Generación de Fuego", "Adorad (Solo En Cristo)"]);

console.log(Artist1);