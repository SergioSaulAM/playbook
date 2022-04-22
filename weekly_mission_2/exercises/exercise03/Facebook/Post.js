class Post {
    constructor(photo, description, taggedPeople, datePublished, numberComments,numberShares, likes) {
        this.photo = photo;
        this.description = description;
        this.taggedPeogle = taggedPeople;
        this.datePublished = datePublished;
        this.numberComments = numberComments;
        this.numberShares = numberShares;
        this.likes =  likes;
    }
}

const PostSerch = new Post(['image_1.jpg', 'image_2.jpg'], "Lorem ipsum dolor sit amet aliquip consetetur clita voluptua voluptua erat ipsum consetetur diam sed dolore facilisis dolor lorem. Lorem soluta sadipscing. Rebum dolores consetetur dolore sit sadipscing lobortis ad accusam.", ["Pedro *", "Juan *"], "27/09/2021", 30, 5, 60);

console.log(PostSerch);