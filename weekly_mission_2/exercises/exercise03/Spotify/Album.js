class Album {
    constructor(albumName, artistRelated, coverImage, dateRelease, songs) {
        this.albumName = albumName;
        this.artistRelated = artistRelated;
        this.coverImage = coverImage;
        this.dateRelease = dateRelease;
        this.songs = songs;
    }
}

const Album1 = new Album("Para Esto Nacimos", "Kenneth Rojas", "image.jpg", "16-11-2016", ["Aleluya", "Eres Mi Todo", "Es Tu Gloria", "Dios Grandioso", "Con Poder"]);

console.log(Album1);