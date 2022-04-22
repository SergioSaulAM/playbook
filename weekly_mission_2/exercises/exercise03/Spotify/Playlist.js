class Playlist {
    constructor(userRelated, name, typeOfPlaylist, numberOfSongs, songs, playlistLengthHrs, collaborators) {
        this.userRelated = userRelated;
        this.name = name;
        this.typeOfPlaylist = typeOfPlaylist;
        this.numberOfSongs = numberOfSongs;
        this.songs = songs;
        this.playlistLengthHrs = playlistLengthHrs;
        this.collaborators = collaborators;
    }
}

const Playlist1 = new Playlist("Juanito Banana", "Cristianas Favoritas", "Private", 141, ["Lion And The Lamb", "Miracle", "..."], "9:44", ["Pedro", "Luis"]);

console.log(Playlist1);