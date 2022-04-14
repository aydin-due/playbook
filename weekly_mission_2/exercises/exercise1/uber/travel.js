const travel = {
    origen: "San Benito 129",
    destino: "Cinépolis",
    rider: "aydin",
    driver: "tomás",
    duration: 15,
    price: 57.23,
    
    getRiderAndDriver: function(){
      return `The user ${this.driver} is driving ${this.rider} to ${this.destino}`
    },

    getGeneralInfo: function(){
      return `the ride from ${this.origen} to ${this.destino} has a duration of ${this.duration} minutes and its total is ${this.price} pesos`
    }
   }
   
   console.log("Nombre del conductor: " + travel.driver)
   console.log("Información del viaje: " + travel.getGeneralInfo())
   console.log(travel.getRiderAndDriver())