class Animals{

  constructor(name , age){
    this.name = name;
    this.age = age;
  }
}
class Rabbit extends Animals{

   constructor(name , age , runspeed) {
    super(name , age);
    this.runspeed = runspeed;
   } 
}
class Fish extends Animals{
  constructor(name , age , swimspeed) {
    super(name , age);
    this.swimspeed = swimspeed;
   } 
}
class Hawk extends Animals{
  constructor(name , age , flyspeed) {
    super(name , age);
    this.flyspeed = flyspeed;
   } 
}

const rabbit = new Rabbit("rabbit" , 1 ,25);
const fish = new Fish("fish" , 2 ,12);
const hawk = new Hawk("hawk" , 3 ,50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);