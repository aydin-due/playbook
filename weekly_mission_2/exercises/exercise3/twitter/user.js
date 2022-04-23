class User {
  constructor(name, username, bio, age){
    this.name = name;
    this,username = username;
    this.bio = bio;
    this,age = age;
    this.dateJoined = "today";
    this.followers = 0;
  }

  get getName(){ return this.name }
  set setName(name){ this.name = name }

  get getFollowers(){ return this.followers }
  set setFollowers(followers){ this.followers = followers }
}

const User1 = new User("aydin","aydin-due","si", 20);
console.log(User1);
