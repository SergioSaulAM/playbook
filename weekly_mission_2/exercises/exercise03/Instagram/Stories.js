class Stories {
    constructor(relatedUser, filters, song, gifs, photo, storyHightlightRelated) {
        this.relatedUser = relatedUser;
        this.filters = filters;
        this.song = song;
        this.gifs = gifs;
        this.photo = photo;
        this.storyHightlightRelated = storyHightlightRelated;
    }
}

const Stories1 = new Stories("Serch Acevedo", ["****", "****"], "Miracle - Tauren Wells", ["***", "***"], "image.jpg", "Viajes");

console.log(Stories1);