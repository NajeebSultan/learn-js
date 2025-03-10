class Animals{

  constructor(name , age){
    this.name = name;
    this.age = age;
  }
  move(speed){
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}
class Rabbit extends Animals{

   constructor(name , age , runspeed) {
    super(name , age);
    this.runspeed = runspeed;
   } 
   run(){
    console.log(`The ${this.name} can run`);
    super.move(this.runspeed);
  }
}
class Fish extends Animals{
  constructor(name , age , swimspeed) {
    super(name , age);
    this.swimspeed = swimspeed;
   } 
   swim(){
    console.log(`The ${this.name} can swim`);
    super.move(this.swimspeed);

  }
}
class Hawk extends Animals{
  constructor(name , age , flyspeed) {
    super(name , age);
    this.flyspeed = flyspeed;
   } 
   fly(){
    console.log(`The ${this.name} can fly`);
    super.move(this.flyspeed);

  }
}

const rabbit = new Rabbit("rabbit" , 1 ,25);
const fish = new Fish("fish" , 2 ,12);
const hawk = new Hawk("hawk" , 3 ,50);

console.log(rabbit.name);
rabbit.run();
fish.swim();
console.log(rabbit.age);
console.log(rabbit.runspeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);