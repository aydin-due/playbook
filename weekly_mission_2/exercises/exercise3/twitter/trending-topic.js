class Hashtag {
  constructor(title, position, topic){
    this.title = title;
    this.position = position;
    this.topic = topic;
    this.totalTweets = 0;
  }

  get getTitle(){ return this.title }
  set setTitle(title){ this.title = title }

  get getTopic(){ return this.topic }
  set setTopic(topic){ this.topic = topic }
}

const TrendingTopic1 = new Hashtag("Sabadazo", 3, "entretenimiento");
console.log(TrendingTopic1);
