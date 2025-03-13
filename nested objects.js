const person = {
  fullName: "Najeeb sultan",
  age: 18,
  isStudent: true,
  hobbies: ["karate" , "Horse riding ", "cooking"],
  address: {
    street: "124 conch st.",
    city: "Islamabad",
    country: "Pakistan"
  }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.city);



class Person{
  constructor(name , age , ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address{
  constructor(street , city , country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("najeeb" , 30 , "124 Coch st." ,
  "Islamabad",
  "pakistan");
  const person2 = new Person("najeeb" , 30 , "124 Coch st." ,
    "Islamabad",
    "pakistan");
    const person3 = new Person("najeeb" , 30 , "124 Coch st." ,
      "Islamabad",
      "pakistan");

      console.log(person1.address);
      console.log(person3.name);