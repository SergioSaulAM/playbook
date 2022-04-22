class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_closed) {
        this.name = name;
        this.author = author;
        this.language = language;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_closed = issues_closed;
    }

    getTotalIssues() {
        return this.issues_open + this.issues_closed;
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`;
    }
}

const Repo1 = new Repo("Launch X", "carlogilmar", "JavaScript", 100, 199, 299, 10, 10);

console.log(Repo1);
console.log("Nombre del repo" + Repo1.getGeneralInfo());
console.log("Issues totales: " + Repo1.getTotalIssues());