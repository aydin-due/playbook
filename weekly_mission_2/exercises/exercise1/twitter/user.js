const user = {
    name: "aydin",
    username: "aydin-due",
    bio: "si",
    age: 20,
    dateJoined: "March 2019",
    followers: 45,
    
    getUserAndFollowers: function(){
      return `The user ${this.username} has ${this.followers} followers`
    },

    getGeneralInfo: function(){
      return `${this.name} joined Twitter on ${this.dateJoined}`
    }
   }
   
   console.log("Nombre del usuario: " + user.name)
   console.log("Información del usuario: " + user.getGeneralInfo())
   console.log(user.getUserAndFollowers())