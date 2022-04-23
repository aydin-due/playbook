class Biography {
  constructor(name){
    this.name = name;
    this.city;
    this.age;
    this.about;
    this.song;
    this.relationshipStatus;
    this.friends;
    this.gender;
  }

  get getName(){ return this.name }
  set setName(name){ this.name = name }

  get getCity(){ return this.city }
  set setCity(city){ this.city = city }

  get getAge(){ return this.age }
  set setAge(age){ this.age = age }

  get getAbout(){ return this.about }
  set setAbout(about){ this.about = about }

  get getRelationshipStatus(){ return this.relationshipStatus }
  set setRelationshipStatus(relationshipStatus){ this.relationshipStatus = relationshipStatus }

  get getGender(){ return this.gender }
  set setGender(gender){ this.gender = gender }
}

const biography1 = new Biography("aydin");
biography1.setAbout = "holi";
biography1.setAge = 20;
biography1.setCity = "Hmo";
console.log(biography1);
