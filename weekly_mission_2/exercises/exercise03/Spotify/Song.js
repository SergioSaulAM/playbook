class Song {
    constructor(name, artistRelated, albumRelated, songLengthMin) {
        this.name = name;
        this.artistRelated = artistRelated;
        this.albumRelated = albumRelated;
        this.songLengthMin = songLengthMin;
    }
}

const Song1 = new Song("This Is Amazing Grace", "Phil Wickham", "The Ascension", "4:39");

console.log(Song1);