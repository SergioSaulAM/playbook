class Post {
    constructor(relatedUser, description, datePublished, taggedPeople, images) {
        this.relatedUser = relatedUser;
        this.description = description;
        this.datePublished = datePublished;
        this.taggedPeople = taggedPeople;
        this.images = images;
    }
}

const Post1 = new Post("Serch Acevedo", "Lorem ipsum dolor sit amet aliquip consetetur clita voluptua voluptua erat ipsum consetetur diam sed dolore facilisis dolor lorem. Lorem soluta sadipscing. Rebum dolores consetetur dolore sit sadipscing lobortis ad accusam.", "21-04-2022",  ["Pedro *", "Juan *"], ["image_1.jpg", "image_2.jpg"]);

console.log(Post1);