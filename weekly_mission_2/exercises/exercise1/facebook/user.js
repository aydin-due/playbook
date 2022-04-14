const user = {
    name: "aydin",
    email: "micorreo@server.com",
    password: "contraseña",
    status: "online",
    city: "Hermosillo",
    friends: 527,
    friendsRequests: 120,
    website: "http://si.com/",
    gender: "female",
    age: 20,
    
    getUserAndStatus: function(){
      return `The user ${this.name} is currently ${this.status}`
    },

    getGeneralInfo: function(){
      return `${this.name} is ${this.age} years old and lives in ${this.city}`
    }
   }
   
   console.log("Nombre del usuario: " + user.name)
   console.log("Información del usuario: " + user.getGeneralInfo())
   console.log(user.getUserAndStatus())