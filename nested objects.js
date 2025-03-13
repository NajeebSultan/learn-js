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




class Address{
  constructor(street , city , country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}