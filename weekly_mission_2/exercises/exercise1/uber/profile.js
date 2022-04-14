const profile = {
    name: "aydin",
    phone: "612-345-23-12",
    email: "micorreo@server.com",
    password: "contraseña",
    stars: 4.99,
    
    getUserAndStars: function(){
      return `The user ${this.name} has ${this.stars} stars`
    },

    getGeneralInfo: function(){
      return `${this.name}'s phone number is ${this.phone}, and her email is ${this.email}`
    }
   }
   
   console.log("Nombre del usuario: " + profile.name)
   console.log("Información del usuario: " + profile.getGeneralInfo())
   console.log(profile.getUserAndStars())