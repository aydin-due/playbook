class Post {
  constructor(user, content){
    this.user = user;
    this.content = content;
    this.date = "Today";
    this.comments = 0;
    this.likes = 0;
    this.shares = 0;
  }

  get getUser(){ return this.user }
  set setUser(user){ this.user = user }

  get getContent(){ return this.content }
  set setContent(content){ this.content = content }

  get getDate(){ return this.date }
  set setDate(date){ this.date = date }

  get getComments(){ return this.comments }
  set setComments(comments){ this.comments = comments }

  get getLikes(){ return this.likes }
  set setLikes(likes){ this.likes = likes }

  get getShares(){ return this.shares }
  set setShares(shares){ this.shares = shares }
}

const post1 = new Post("aydin", "mi primer post");
post1.setLikes = 12;
post1.setShares = 5;
console.log(post1);
  