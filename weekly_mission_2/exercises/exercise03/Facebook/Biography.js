class Biography {
    constructor (user_name, profile_photo, cover_photo, numberOfPhotosPublished, numberOfVideosPublished, numberOfPosts, numberOfStories, friends) {
        this.user_name = user_name;
        this.profile_photo = profile_photo;
        this.cover_photo = cover_photo;
        this.numberOfPhotosPublished = numberOfPhotosPublished;
        this.numberOfVideosPublished = numberOfVideosPublished;
        this.numberOfPosts = numberOfPosts;
        this.numberOfStories = numberOfStories;
        this.friends = friends;
    }
}

const BiographySerch = new Biography("Serch Acevedo",
"image_1.png", "image_2.png", 50, 10, 30, 10, ["Pedro *", "Juan *", "..."]);

console.log(BiographySerch);