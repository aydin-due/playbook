class PullRequest {
  constructor(title, repositoryNameAssociated, author){
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = "open";
    this.author = author;
    this.dateCreated = "Today";
    this.branchName = "master";
  }

  get getTitle(){ return this.title }
  set setTitle(title){ this.title = title }

  get getStatus(){ return this.status }
  set setStatus(status){ this.status = status }
}

const pullRequest1 = new PullRequest("update index", "project", "aydin-due");
console.log(pullRequest1);
