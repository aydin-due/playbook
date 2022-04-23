class Issue {
  constructor(title, repositoryNameAssociated, labels, author){
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = "open";
    this.numberOfComments = 0;
    this.labels = labels;
    this.author = author;
    this.dateCreated = "Today";
    this.lastUpdated = "Today";
  }

  get getTitle(){ return this.title }
  set setTitle(title){ this.title = title }

  get getStatus(){ return this.status }
  set setStatus(status){ this.status = status }

  get getLabels(){ return this.labels }
  set setLabels(labels){ this.labels = labels }
}

const issue1 = new Issue("update index", "project", ["bugs", "documentation"], "aydin-due");
console.log(issue1);
