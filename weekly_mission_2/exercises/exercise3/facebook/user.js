class User {
  constructor(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
    this.status = "online";
    this.city;
    this.age;
    this.gender;
  }

  get getName(){ return this.name }
  set setName(name){ this.name = name }

  get getCity(){ return this.city }
  set setCity(city){ this.city = city }

  get getAge(){ return this.age }
  set setAge(age){ this.age = age }

  get getEmail(){ return this.email }
  set setEmail(email){ this.email = email }

  get getPassword(){ return this.password }
  set setPassword(password){ this.password = password }

  get getStatus(){ return this.status }
  set setStatus(status){ this.status = status }

  get getGender(){ return this.gender }
  set setGender(gender){ this.gender = gender }
}

const user1 = new User("aydin", "micorreo@servidor.com", "contraseña");
user1.setAge = 20;
user1.setCity = "Hmo";
user1.setGender = "mujer";
console.log(user1);
  