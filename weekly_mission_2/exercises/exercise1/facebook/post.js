const post = {
    content: "aaaaaa",
    user: "aydin",
    date: "Wed 21/02/21",
    comments: ["jaja", "sisoy"],
    likes: 12,
    shares: 6,
    
    getPostAndUser: function(){
      return `The user ${this.user} posted "${this.content}"`
    },

    getGeneralInfo: function(){
      return `The post "${this.content}" has a total of ${this.likes} likes, ${this.shares} shares and ${this.comments.length} comments`
    }
   }
   
   console.log("Contenido del post: " + post.content)
   console.log("Información del post: " + post.getGeneralInfo())
   console.log(post.getPostAndUser())