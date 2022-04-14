const trendingTopic = {
    title: "México",
    position:2,
    totalTweets: 1234,
    topic: "politics",
    
    getTitleAndTopic: function(){
      return `The trending topic ${this.title} is about ${this.topic}`
    },

    getGeneralInfo: function(){
      return `The trending topic in the position ${this.position} has a total of ${this.totalTweets} tweets`
    }
   }
   
   console.log("Nombre del topic: " + trendingTopic.title)
   console.log("Información del topic: " + trendingTopic.getGeneralInfo())
   console.log(trendingTopic.getTitleAndTopic())