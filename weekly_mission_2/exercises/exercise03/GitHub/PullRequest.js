class PullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated) {
        this.title = title;
        this.branchName = branchName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAssociated = repositoryNameAssociated;
    }

    getStatus() {
        return `Your pull request status is: ${this.status}`
    }

    getTitleAndAuthor() {
        return `PR title: ${this.title}; Creation date: ${this.dateCreated}`
    }
}

const PullRequest1 = new PullRequest("Mando link de mi blog", "main", "08-04-2022", "In process", "MissionNodeJS");

console.log(PullRequest1);
console.log(PullRequest1.getStatus());
console.log(PullRequest1.getTitleAndAuthor());