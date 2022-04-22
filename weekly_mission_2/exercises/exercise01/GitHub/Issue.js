const issue = {
    title: "09 Live 2 Semana 3",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Active",
    numberOfComments: "30",
    labels: ["FINALIZADO", "LIVE 2", "Semana-3"],
    author: "carlogilmar",
    dateCreated: "20-04-2022",
    lastUpdated: Date.parse(),
    getTitleAndAuthor: function() {
        return `Title: ${this.title}, created by: ${this.author}`
    },
    getGeneralInfo: function() {
        return `This repository ${this.title} was created by ${this.author}`;
    }
}

console.log(issue);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());