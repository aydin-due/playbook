class Profile {
  constructor(name, phone,email,password){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.stars = 0;
  }

  get getStars(){ return this.stars }
  set setStars(stars){ this.stars = stars }

  get getName(){ return this.name }
  set setName(name){ this.name = name }
}

const Profile1 = new Profile("aydin", "642143423", "aydin@gmail.com", "contra123");
console.log(Profile1);
