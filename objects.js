
const person1 = {
  firstName: "Najeeb",
  lastName: "Sultan",
  age:18,
  isEmployed: true,
  sayHello: function(){console.log("Hi! I am Najeeb")},
  eat:function (){ console.log("I am eating pizza")},
}

const person2 = {
  firstName: "Sameed",
  lastName: "Ullah",
  age:25,
  isEmployed: true,
  sayHello: function(){console.log("Hi! I am Sameed")},
  eat:function (){ console.log("I am eating pizza")},


}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();


// this

const person3 ={
  name: "Najeeb",
  favfood: "pizza",
  sayHello: function(){console.log(`Hi! i am ${this.favfood}`)},
  eat: function(){ console.log(`${this.name} is eating ${this.favfood}`)},
}
person3.eat();
