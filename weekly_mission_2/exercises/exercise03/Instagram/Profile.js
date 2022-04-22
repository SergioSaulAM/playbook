class Profile {
    constructor(user_name, numberOfPosts, following, followers, nameStoryHighlights){
        this.user_name = user_name;
        this.numberOfPosts = numberOfPosts;
        this.following = following;
        this.followers = followers;
        this.nameStoryHighlights = nameStoryHighlights;
    }
}

const Profile1 = new Profile("Serch Acevedo", 5, 172, 684, ["Viaje", "Escuela"]);
console.log(Profile1);