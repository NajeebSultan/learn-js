
class MathUtil{
  static PI = 3.14159;

  static getDiameter(radius){
    return radius * 2;
  }
  static getCircumference(radius){
    return 2 * this.PI *radius;
  }
  static getArea(radius){
    return this.PI * radius * radius;
  }

}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


class User{
  static userCount = 0;

  constructor(username){
    this.username = username;
    User.userCount++;
  }
  static getUserCount(){
    console.log(`There are ${User.userCount} users online`);
  }
  sayHello(){
    console.log(`Hello , my username is ${this.username}`);
  }
}
const user1 = new User("Najeeb");
const user2 = new User("sameed");
const user3 = new User("Rajaab");
user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();