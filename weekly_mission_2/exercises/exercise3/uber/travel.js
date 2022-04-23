class Travel {
  constructor(origen,destino,rider,driver,duration,price){
    this.origen = origen;
    this.destino = destino;
    this.rider = rider;
    this.driver = driver;
    this.duration = duration;
    this.price = price;
  }

  get getOrigen(){ return this.origen }
  set setOrigen(origen){ this.origen = origen }

  get getDestino(){ return this.destino }
  set setDestino(destino){ this.destino = destino }
}

const Travel1 = new Travel("casa", "escuela", "aydin", "tomas", 20, 56.45);
console.log(Travel1);
