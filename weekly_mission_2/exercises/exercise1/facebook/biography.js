const biography = {
    name: "aydin",
    city: "Hermosillo",
    about: "mg dormir",
    song: "GUMMY - BROCKHAMPTON",
    relationshipStatus: "single",
    friends: 527,
    website: "http://si.com/",
    gender: "female",
    age: 20,
    
    getUserAndAbout: function(){
      return `The user ${this.name} says "${this.about}"`
    },

    getGeneralInfo: function(){
      return `${this.name} is ${this.age} years old and lives in ${this.city}`
    }
   }
   
   console.log("Nombre del usuario: " + biography.name)
   console.log("Información del usuario: " + biography.getGeneralInfo())
   console.log(biography.getUserAndAbout())