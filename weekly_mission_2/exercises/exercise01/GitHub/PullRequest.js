const PullRequest = {
    title: "Mandando link de mi blog",
    branchName: "main",
    dateCreated: "08-04-2022",
    status: "In process",
    repositoryNameAssociated: "MissionNodeJS",
    getStatus: function() {
        return `Your pull request status is: ${this.status}`
    },
    getTitleAndAuthor: function() {
        return `PR title: ${this.title}; Creation date: ${this.dateCreated}`
    }
}


console.log(PullRequest);
console.log(PullRequest.getStatus());
console.log(PullRequest.getTitleAndAuthor());