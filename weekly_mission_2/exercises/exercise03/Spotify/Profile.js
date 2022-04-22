class Profile {
    constructor(name, numberOfFollowing, numberOfFollowers, Following, Followers, mainArtists, mainMonthlySongs, publicPlaylists, Playlists){
        this.name = name;
        this.numberOfFollowing = numberOfFollowing;
        this.numberOfFollowers = numberOfFollowers;
        this.Following = Following;
        this.Followers = Followers;
        this.mainArtists = mainArtists;
        this.mainMonthlySongs = mainMonthlySongs;
        this.publicPlaylists = publicPlaylists;
        this.Playlists = Playlists;
    }
}

const Profile1 = new Profile("Juanito Banana", 71, 171, ["Luis Miguel", "Vicente Fernández"], ["Charly", "Pedro"], ["Luis Miguel", "Vicente Fernández"], ["Back At One", "Hymn of the Weekend"], ["Cumbias de microbuseros"], ["Gustos"]);

console.log(Profile1);