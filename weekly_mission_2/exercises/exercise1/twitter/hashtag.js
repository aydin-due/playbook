const hashtag = {
    title: "#TengoSueño",
    totalTweets: 1234,
    relatedtopic: "entertainment",
    latestTweets: 13,
    users: ["user1", "user2", "user3"],
    
    getLatestTweets: function(){
        return `The hastag ${this.title} has ${this.latestTweets} tweets in the last hour`
    },

    getGeneralInfo: function(){
        return `The hastag ${this.title} has a total of ${this.totalTweets} tweets`
    }
   }
   
   console.log("Nombre del hashtag: " + hashtag.title)
   console.log("Información del hashtag: " + hashtag.getGeneralInfo())
   console.log(hashtag.getLatestTweets())