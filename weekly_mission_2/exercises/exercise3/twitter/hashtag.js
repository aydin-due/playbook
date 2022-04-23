class Hashtag {
    constructor(title, relatedTopic){
        this.title = title;
        this.totalTweets = 0;
        this.relatedTopic = relatedTopic;
        this.latestTweets = 0;
        this.users = ["aydin", "si"]
    }

    get getTitle(){ return this.title }
    set setTitle(title){ this.title = title }

    get getUsers(){ return this.users }
    set setUsers(users){ this.users = users }
}

const Hashtag1 = new Hashtag("Sabadazo", "entretenimiento");
console.log(Hashtag1);
