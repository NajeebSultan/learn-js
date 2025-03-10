class Animals{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }
  sleep(){
    console.log(`This ${this.name} is sleeping`);

  }
}
class Rabbit extends Animals{
  name= "rabbit";
run(){
  console.log(`This ${this.name} is running`);
}  

}
class Fish extends Animals{
  name= "fish";
swim(){
  console.log(`This ${this.name} is swimming`);

}
}
class Hawk extends Animals{
  name= "hawk";
fly(){
  console.log(`This ${this.name} is flying`);

}
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
fish.swim();

