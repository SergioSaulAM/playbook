class Issue {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated) {
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.status = status;
        this.numberOfComments = numberOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }

    getTitleAndAuthor() {
        return `Title: ${this.title}, created by: ${this.author}`
    }

    getGeneralInfo() {
        return `This repository ${this.title} was created by ${this.author}`;
    }
}

const Issue1 = new Issue("09 Live 2 Semana 3", "MissionNodeJS", "Active", 30, ["FINALIZADO", "LIVE 2", "Semana-3"], "carlogilmar", "20-04-2022", "22-04-2022");

console.log(Issue1);
console.log(Issue1.getTitleAndAuthor());
console.log(Issue1.getGeneralInfo());