class Repo {
  constructor(name, author, language){
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = 0;
    this.stars = 0;
    this.forks = 0;
    this.issues_open = 0;
    this.issues_close = 0;
  }

  get getStars(){ return this.stars }
  set setStars(stars){ this.stars = stars }

  get getNumberOfCommits(){ return this.numberOfCommits }
  set setNumberOfCommits(numberOfCommits){ this.numberOfCommits = this.numberOfCommits }
}

const repo1 = new Repo("project", "aydin", "python");
console.log(repo1);